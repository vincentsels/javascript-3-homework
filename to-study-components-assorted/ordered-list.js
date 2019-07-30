var arr = ["frites", "mayonaise", "moules"];

function ol_component(items) {
  var ol = document.createElement("ol");

  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = items[i];
    ol.appendChild(li);
  }

  return ol;
}

function render_ol_handler() {

  // --- read user input ---

  // no user input

  // --- core logic and data management ---

  // nothing to do here

  // --- display result for user ---

  var display_zone = document.getElementById("ordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ol = ol_component(arr);

  display_zone.appendChild(new_ol);

}

var render_ol_button = document.getElementById("render-ordered-list");
render_ol_button.addEventListener("click", render_ol_handler);


function add_to_ol_handler() {

  // --- read user input ---

  var new_item_field = document.getElementById("new-ol-entry");
  var new_item = new_item_field.value;

  // --- core logic and data management ---

  arr.push(new_item);

  // --- display result for user ---

  var display_zone = document.getElementById("ordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ol = ol_component(arr);

  display_zone.appendChild(new_ol);

}

var add_to_ol_button = document.getElementById("add-to-ordered-list");
add_to_ol_button.addEventListener("click", add_to_ol_handler);



function remove_from_ol_handler() {

  // --- read user input ---

  // no user input

  // --- core logic and data management ---

  arr.pop();

  // --- display result for user ---

  var display_zone = document.getElementById("ordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ol = ol_component(arr);

  display_zone.appendChild(new_ol);

}

var remove_from_ol_button = document.getElementById("remove-from-ordered-list");
remove_from_ol_button.addEventListener("click", remove_from_ol_handler);
