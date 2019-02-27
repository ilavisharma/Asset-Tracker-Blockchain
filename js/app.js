var assetCount = 0;
$(document).ready(() => {
  renderPageContent();
  console.clear();
});
function renderPageContent() {
  AssetTrackerContract.methods.getAssetCount().call((error, response) => {
    if (error) console.log(error);
    else {
      assetCount = response[0];
      $("#count").html("Total " + response[0] + " Assets in the Blockchain");
      renderTable();
    }
  });

  function renderTable() {
    for (let i = 1; i <= parseInt(assetCount); i++) {
      AssetTrackerContract.methods.getAsset(i).call((error, response) => {
        if (error) console.log(error);
        else {
          let row =
            '<tr><th scope="row">' +
            i +
            "</th>" +
            "<td>" +
            response[0] +
            "</td>" +
            "<td>" +
            response[1] +
            "</td>" +
            "<td>" +
            response[2] +
            "</td>" +
            "<td>" +
            response[3] +
            "</td>" +
            "<td>" +
            response[4] +
            "</td></tr>";

          $("#loading").hide();
          $("tbody").append(row);
        }
      });
    }
  }
}

function createNewAsset() {
  // // generate data
  // // $('input[name="batchNo"]').val(faker.random.number());
  // document.querySelector('input[name="batchNo"]').value = faker.random.number();
  // $('input[name="name"]').val(faker.commerce.product());
  // $('input[name="desc"]').val(faker.lorem.sentence());
  // $('input[name="manufacturer"]').val(faker.company.companyName());
  // $('input[name="owner"]').val(faker.company.companyName());

  let batchNo = $('input[name="batchNo"]').val();
  let name = $('input[name="name"]').val();
  let desc = $('input[name="desc"]').val();
  let manufacturer = $('input[name="manufacturer"]').val();
  let owner = $('input[name="owner"]').val();
  let status = $('input[name="status"]').val();

  // send these values to the smart contract
  AssetTrackerContract.methods
    .createAsset(batchNo, name, desc, manufacturer, owner, status)
    .send()
    .then(result => {
      console.log(result);
      if (result.status === true) {
        alert("Success");
        $("tbody").html("");
        renderPageContent();
      }
    });
  $("#exampleModal").modal("hide");
}
