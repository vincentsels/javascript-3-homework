// this is more advanced
//    it uses "this" to determine which bio to render by reading information stored in the buttons when they were created
//    and attaches the listener in "all_bios_component"

function render_one_handler() {

  // --- read user input ---

  // read the id of the button you are clicking
  // this id was set when the component was created
  var bio_id = this.id;

  // --- perform core logic and data manipulations

  var chosen_bio = all_bios[bio_id];

  // --- draw results for user

  var display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = bio_component(chosen_bio.un, chosen_bio.img);

  display_zone.appendChild(new_component);

}

// event listeners are attached in "all_bios_component"