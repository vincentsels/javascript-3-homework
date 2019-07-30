var title = "hack";
var body = "your future";

function header_and_p_component(header_text, p_text) {
  var container = document.createElement("div");

  var header = document.createElement("h3");
  header.innerHTML = header_text;

  var p = document.createElement("p");
  p.innerHTML = p_text;

  container.appendChild(header);
  container.appendChild(p);

  return container;
}

function render_hp_handler() {

  // --- read user input ---

  // nothing to read in here


  // --- perform core logic and data manipulations ---

  // nothing to do here

  // --- write results for the user ---

  var display_zone = document.getElementById("hp-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = header_and_p_component(title, body);

  display_zone.appendChild(new_component);

};

var render_hp_button = document.getElementById("render-hp");
render_hp_button.addEventListener("click", render_hp_handler);



function change_hp_handler() {

  // --- read user input ---

  var header_input = document.getElementById("header-value");
  var header_value = header_input.value;

  var p_input = document.getElementById("p-value");
  var p_value = p_input.value;


  // --- perform core logic and data manipulations ---

  title = header_value;
  body = p_value;


  // --- write results for the user ---

  var display_zone = document.getElementById("hp-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = header_and_p_component(title, body);

  display_zone.appendChild(new_component);

};

var change_hp_button = document.getElementById("change-hp");
change_hp_button.addEventListener("click", change_hp_handler);

