function searchAsset() {
  $("#loading").show();
  let id = parseInt($('input[name="id"]').val());

  // search in the smart contract
  AssetTrackerContract.methods.getAsset(id).call((error, response) => {
    if (error) console.log(error);
    else {
      if (response[1] !== "") {
        // asset is found
        let result =
          '<br><h2 style="color: #218f76;">Asset found</h2>' +
          "<strong>Name: </strong>" +
          response[1] +
          "<br>" +
          "<strong>Batch No: </strong>" +
          response[0] +
          "<br>" +
          "<strong>Manufacturer: </strong>" +
          response[2] +
          "<br>" +
          "<strong>Owner: </strong>" +
          response[3] +
          "<br>" +
          "<strong>Description: </strong>" +
          response[5] +
          "<br>" +
          "<strong>Current Status: </strong>" +
          response[4] +
          "<br>";

        $("#searchResult").html("");
        $("#loading").hide();
        $("#searchResult").append(result);

        // show the status history
        $("#statusHistory").show();
        // asset history
        assetHistory(id);
      } else {
        // asset is not found
        let result = "<h3>Asset Not Fuund</h3>";
        $("#searchResult").html("");
        $("#loading").hide();
        $("#searchResult").append(result);
      }
    }
  });
}

function assetHistory(id) {
  AssetTrackerContract.methods.AssetStore(id).call((error, response) => {
    if (error) console.log(error);
    else {
      let statusCount = parseInt(response[5]);
      for (let i = statusCount; i >= 1; i--) {
        AssetTrackerContract.methods
          .getStatus(id, i)
          .call((error, response) => {
            if (error) console.log(error);
            else {
              let date = new Date(parseInt(response[0]) * 1000);
              let event =
                date +
                "<br>" +
                response[2] +
                "<br>" +
                response[1] +
                "<br>" +
                "<br>";
              $("#statusHistory").append(event);
            }
          });
      }
    }
  });
}
