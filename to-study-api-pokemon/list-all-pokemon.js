function list_all_pokemon_handler() {
  // read user input
  // no user input

  // make api request
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
    .then(function(response) {
      // handle HTTP response
      return response.json();
    })
    .then(function(all_pokemon) {
      // process & prepare the data
      const poke_names = [];
      for (let pokemon of all_pokemon.results) {
        poke_names.push(pokemon.name);
      }

      // write results for user
      const pokezone = document.getElementById("pokezone");
      while(pokezone.firstChild){
          pokezone.removeChild(pokezone.firstChild);
      }

      const pokelist = document.createElement("ul");
      for (let name of poke_names) {
        const li = document.createElement("li");
        li.innerHTML = name;
        pokelist.appendChild(li);
      }

      pokezone.appendChild(pokelist);
      
    })
    .catch(function(err) {
      // alert user of error
      throw err;
    })

}
const list_all_pokemon_button = document.getElementById("list-all-pokemon");
list_all_pokemon_button.addEventListener("click", list_all_pokemon_handler);

