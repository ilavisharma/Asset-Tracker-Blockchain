AssetTrackerContract.events.AssetCreate((error, result) => {
  if (error) console.log(error);
  else {
    let { returnValues } = result;
    console.log(returnValues);
    const newEventData =
      "<h4>New asset created with id " +
      returnValues[0] +
      " by " +
      returnValues[1] +
      " current status " +
      returnValues[2] +
      "</h4>";
    $("#dataLog").append(newEventData);
  }
});
