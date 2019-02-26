AssetTrackerContract.methods.getAssetCount().call((error, response) => {
  if (error) console.log(error);
  else {
    console.log(response);
    $("#id").html("Total " + response[0] + " Assets");
  }
});
