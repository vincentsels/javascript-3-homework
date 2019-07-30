var obj = {
  red: "color",
  leather: "material",
  sun: "star",
  pickle: "medicine"
};

function ul_component(data) {
  var ul = document.createElement("ul");

  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var li = document.createElement("li");

    li.innerHTML = keys[i]+": "+data[keys[i]];

    ul.appendChild(li);
  }

  return ul;
}

function render_ul_handler() {

  // --- read user input ---

  // no user input

  // --- core logic and data management ---

  // nothing to do here

  // --- display result for user ---

  var display_zone = document.getElementById("unordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ul = ul_component(obj);

  display_zone.appendChild(new_ul);

}

var render_ul_button = document.getElementById("render-unordered-list");
render_ul_button.addEventListener("click", render_ul_handler);


function add_to_ul_handler() {

  // --- read user input ---

  var new_key_field = document.getElementById("new-ul-key");
  var new_key = new_key_field.value;

  var new_value_field = document.getElementById("new-ul-value");
  var new_value = new_value_field.value;

  // --- core logic and data management ---

  obj[new_key] = new_value;

  // --- display result for user ---

  var display_zone = document.getElementById("unordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ul = ul_component(obj);

  display_zone.appendChild(new_ul);

}

var add_to_ul_button = document.getElementById("add-to-unordered-list");
add_to_ul_button.addEventListener("click", add_to_ul_handler);



function remove_from_ul_handler() {

  // --- read user input ---

  var to_remove_field = document.getElementById("ul-key-to-remove");
  var key_to_remove = to_remove_field.value;

  // --- core logic and data management ---

  delete obj[key_to_remove];

  // --- display result for user ---

  var display_zone = document.getElementById("unordered-list-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_ul = ul_component(obj);

  display_zone.appendChild(new_ul);

}

var remove_from_ul_button = document.getElementById("remove-from-unordered-list");
remove_from_ul_button.addEventListener("click", remove_from_ul_handler);
