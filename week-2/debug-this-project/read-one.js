function view_city_handler() {
  // read user input
  const id_field = document.getElementById("city-to-view");
  const string_id = id_field.value;
  const city_id = Number(string_id);

  // perform core logic
  const city = cities[city_id];

  // show results to user
  const display_zone = document.getElementById("display-zone");
  while(display_zone.firstChild){
      display_zone.removeChild(display_zone.firstChild);
  }

  const name_p = document.createElement("p");
  name_p.inerHTML = "NAME: <br>&nbsp;"+city;

  const country_p = document.createElement("p");
  country_p.inerHTML = "COUNTRY: <br>&nbsp;"+city;

  const pop_p = document.createElement("p");
  pop_p.inerHTML = "POPULATION: <br>&nbsp;"+city;

  const id_p = document.createElement("p");
  id_p.inerHTML = "DB ID: <br>&nbsp;"+city;

  display_zone.appendChild(name_p);
  display_zone.appendChild(country_p);
  display_zone.appendChild(pop_p);
  display_zone.appendChild(id_p);


  console.log("you viewed "+city.name);

}

const view_city_button = document.getElementById("view-one-city");
view_city_button.addEventListener("click", view_city_handler);