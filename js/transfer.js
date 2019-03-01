function searchAsset() {
  // clear previous search result
  $("#searchResult").html("");

  //   now search the asset
  assetId = parseInt($('input[name="id"]').val());
  AssetTrackerContract.methods.getAsset(assetId).call((error, response) => {
    if (error) console.log(error);
    else {
      // if found
      if (response[1] !== "") {
        let content =
          "<h4>Asset Found</h4>Name: " +
          response[1] +
          "<br>" +
          "Owner: " +
          response[3] +
          "<br>" +
          "Current Status: " +
          response[4];
        $("#searchResult").append(content);
        $("#transferFrom").show();
      } else {
        //   if not found
        let content = "<h4>Asset Not Found</h4>";
        $("#searchResult").append(content);
        $("#transferFrom").hide();
      }
    }
  });
}

function transferAsset() {
  let assetId = parseInt($('input[name="id"]').val());
  let newOwner = $('input[name="newOwner"]').val();
  let newStatus = $('input[name="newStatus"]').val();

  // transfer the asset
  AssetTrackerContract.methods
    .transferAsset(assetId, newOwner, newStatus)
    .send()
    .then(tx => {
      console.log(tx);
    });
}
