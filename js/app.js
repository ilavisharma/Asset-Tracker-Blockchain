var assetCount = 0;
$(document).ready(() => {
  renderPageContent();
});
function renderPageContent() {
  AssetTrackerContract.methods.getAssetCount().call((error, response) => {
    if (error) console.log(error);
    else {
      assetCount = response;
      $("#count").html("Total " + response + " Assets");
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
      if (result.status === true) {
        alert("Success");
        console.log(result);
        $("#loading").show();
        $("tbody").html("");
        renderPageContent();
        // clear the form
        $('input[name="batchNo"]').val("");
        $('input[name="name"]').val("");
        $('input[name="desc"]').val("");
        $('input[name="manufacturer"]').val("");
        $('input[name="owner"]').val("");
        $('input[name="status"]').val("");
      }
    });
  $("#exampleModal").modal("hide");
}

function generateAsset() {
  return {
    batchNo: faker.random.number().toString(),
    name: faker.commerce.product(),
    desc: faker.lorem.sentence(),
    manufacturer: faker.company.companyName(),
    owner: faker.company.companyName()
  };
}

$("#exampleModal").on("shown.bs.modal", e => {
  // fill the modal form with fake data when modal is shown
  $('input[name="batchNo"]').val(faker.random.number().toString());
  $('input[name="name"]').val(faker.commerce.product());
  $('input[name="desc"]').val(faker.lorem.text());
  $('input[name="manufacturer"]').val(faker.company.companyName());
  $('input[name="owner"]').val(faker.company.companyName());
});
