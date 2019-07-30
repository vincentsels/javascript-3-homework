function all_bios_component(bios_array, bio_comp) {
  var container = document.createElement("div");

  for (var i = 0; i < bios_array.length; i++) {
    var bio = all_bios[i];

    var bio_element = bio_comp(bio.un, bio.img);
    
    var render_me = document.createElement("button");
    render_me.innerHTML = "render me alone";
    render_me.addEventListener("click", render_one_handler);
    render_me.id = i;

    bio_element.appendChild(render_me);

    container.appendChild(bio_element);
    container.appendChild(document.createElement("br"));
  }

  return container;
}