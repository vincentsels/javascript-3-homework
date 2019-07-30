var table_data = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

// function table_component(arr) {
//   var table = document.createElement("table");

//   for (let i = 0; i < arr.length; i++) {
//     // var tr = document.createElement("tr");
//     var row = table.insertRow(i);
//     for (let j = 0; j < arr[i]; j++) {
//       // var td = document.createElement("td");
//       var cell = row.incertCell(j);
//       cell.innerHTML = "("+i+", "+j+")";
//       // console.log(td)
//       // tr.insertCell("("+i+", "+j+")");
//     }
//     // table.appendChild(tr);
//   }

//   return table;
// }

function table_component(arr) {
  var table = document.createElement("table");

  for (let i = 0; i < arr.length; i++) {
    var tr = document.createElement("tr");
    for (let j = 0; j < arr[i].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = i+", "+j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  return table;
}


function render_table_handler() {

  // --- read user input ---

  // no user input

  // --- core logic and data management ---

  // nothing to do here

  // --- display result for user ---

  var display_zone = document.getElementById("table-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_table = table_component(table_data);

  display_zone.appendChild(new_table);

}

var render_table_button = document.getElementById("render-table");
render_table_button.addEventListener("click", render_table_handler);




function new_table_handler() {

  // --- read user input ---

  var new_width_field = document.getElementById("new-table-width");
  var new_width_str = new_width_field.value;
  var new_width = Number(new_width_str);

  var new_height_field = document.getElementById("new-table-height");
  var new_height_str = new_height_field.value;
  var new_height = Number(new_height_str);

  // --- core logic and data management ---

  table_data = [];
  for (var i = 0; i < new_height; i++) {
    var new_row = [];
    for (var j = 0; j < new_width; j++) {
      new_row.push(null);
    }
    table_data.push(new_row);
  }

  // --- display result for user ---

  var display_zone = document.getElementById("table-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_table = table_component(table_data);

  display_zone.appendChild(new_table);

}

var new_table_button = document.getElementById("new-table");
new_table_button.addEventListener("click", new_table_handler);
