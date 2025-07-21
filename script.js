
    
  function insert_Row() {
    // Get the table using its ID
    var table = document.getElementById("sampleTable");

    // Create a new row at index 0 (top of the table)
    var newRow = table.insertRow(0);

    // Insert 2 new cells in the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the content of the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
