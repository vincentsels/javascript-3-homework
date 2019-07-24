function view_city_handler() {
  // read user input
  const id_field = document.getElementById("city-to-view");
  const string_id = id_field.value;
  const city_id = Number(string_id);

  // perform core logic
  const model_entry = cities.read(city_id);

  // show results to user
  const display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  const name_p = document.createElement("p");
  name_p.innerHTML = "NAME: <br>&nbsp;"+model_entry.name;

  const country_p = document.createElement("p");
  country_p.innerHTML = "COUNTRY: <br>&nbsp;"+model_entry.country;

  const pop_p = document.createElement("p");
  pop_p.innerHTML = "POPULATION: <br>&nbsp;"+model_entry.population;

  const id_p = document.createElement("p");
  id_p.innerHTML = "DB ID: <br>&nbsp;"+model_entry.id;

  display_zone.appendChild(name_p);
  display_zone.appendChild(country_p);
  display_zone.appendChild(pop_p);
  display_zone.appendChild(id_p);


  console.log("you viewed "+model_entry.name);

}

const view_city_button = document.getElementById("view-one-city");
view_city_button.addEventListener("click", view_city_handler);