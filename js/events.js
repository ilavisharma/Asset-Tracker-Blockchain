AssetTrackerContract.events.AssetCreate((error, result) => {
  if (error) console.log(error);
  else {
    let data = result.returnValues;

    // append data to the table
    let row =
      '<tr class="table-succes"><td class="table-active">' +
      data[0] +
      '</td><td class="table-active">' +
      data[1] +
      '</td><td class="table-active">' +
      data[2] +
      "</td></tr>";
    $("tbody").append(row);
  }
});

AssetTrackerContract.events.AssetTransfer((error, result) => {
  if (error) console.log(error);
  else {
    let data = result.returnValues;

    // append data to the table
    let row =
      '<tr class="table-info"><td>' +
      data[0] +
      "</td><td>" +
      data[1] +
      "</td><td>" +
      data[2] +
      "</td></tr>";
    $("tbody").append(row);
  }
});
