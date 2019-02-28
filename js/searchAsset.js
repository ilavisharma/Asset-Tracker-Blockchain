function searchAsset() {
  $("#loading").show();
  var id = parseInt($('input[name="id"]').val());

  // search in the smart contract
  AssetTrackerContract.methods.getAsset(id).call((error, response) => {
    if (error) console.log(error);
    else {
      if (response[1] !== "") {
        let result =
          "<h3>Asset found</h3>" +
          "Name: " +
          response[1] +
          "Batch No: " +
          response[0] +
          "Manufacturer" +
          response[2] +
          "Current Status: " +
          response[4] +
          "Owner: " +
          response[3] +
          "Description: " +
          response[5];
        $("#searchResult").html("");
        $("#loading").hide();
        $("#searchResult").append(result);
      } else {
        let result = "<h3>Asset Not Fuund</h3>";
        $("#searchResult").html("");
        $("#loading").hide();
        $("#searchResult").append(result);
      }
    }
  });
}
