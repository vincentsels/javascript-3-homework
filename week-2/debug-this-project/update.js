function update_city_handler() {
  // read user input
  const id_field = document.getElementById("id-to-update");
  const id_string = id_field.value;
  const id_to_update = Number(id_string);

  const pop_field = document.getElementById("new-population");
  const pop_string = pop_field.value;
  const new_population = Number(pop_string);


  // perform core logic
  
  const old_pop = cities[id_to_update].population;

  cities[id_to_update].population = new_population;

  const city = cities[id_to_update];

  // show results to user
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  const name_p = document.createElement(p);
  name_p.innerHTML = "NAME: <br>&nbsp;"+city.name;

  const old_pop_p = document.createElement(p);
  old_pop_p.innerHTML = "OLD POP: <br>&nbsp;"+old_pop;

  const new_pop_p = document.createElement(p);
  new_pop_p.innerHTML = "NEW POP: <br>&nbsp;"+new_population;

  display_zone.appendChild(name_p);
  display_zone.appendChild(old_pop_p);
  display_zone.appendChild(new_pop_p);

  console.log("you updated "+city.name);

}

const update_city_button = document.getElementById("update-city");
update_city_button.addEventListener("click", update_city_handler);
