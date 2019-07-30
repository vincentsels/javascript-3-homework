function add_bio_handler() {

  // --- read user input ---

  var username_input = document.getElementById("username");
  var username_value = username_input.value;

  var photo_link_input = document.getElementById("photo-link");
  var photo_link_value = photo_link_input.value;



  // --- perform core logic and data manipulations ---

  var new_bio = {
    un: username_value,
    img: photo_link_value
  }

  all_bios.push(new_bio);


  // --- write results for the user ---

  var display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = all_bios_component(all_bios, bio_component);

  display_zone.appendChild(new_component);

};

var add_bio_button = document.getElementById("add-bio-button");
add_bio_button.addEventListener("click", add_bio_handler);

