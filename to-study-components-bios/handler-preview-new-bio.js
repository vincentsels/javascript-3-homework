function preview_new_bio_handler() {

  // --- read user input ---

  var username_input = document.getElementById("username");
  var username_value = username_input.value;

  var photo_link_input = document.getElementById("photo-link");
  var photo_link_value = photo_link_input.value;



  // --- perform core logic and data manipulations ---

  // (there is none, we are using input as-is to preview components)


  // --- write results for the user ---

  var display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  var new_component = bio_component(username_value, photo_link_value);

  display_zone.appendChild(new_component);

};

var preview_new_bio_button = document.getElementById("preview-new-bio-button");
preview_new_bio_button.addEventListener("click", preview_new_bio_handler);

