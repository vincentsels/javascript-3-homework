function render_all_handler() {

  // --- read user input ---

  // no user input to read


  // --- perform core logic and data manipulations ---

  // (there is none, we are using the global variable "all_bios" as-is)


  // --- write results for the user ---

  var display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = all_bios_component(all_bios, bio_component);

  display_zone.appendChild(new_component);

};

var all_bios_button = document.getElementById("all-bios-button");
all_bios_button.addEventListener("click", render_all_handler);

