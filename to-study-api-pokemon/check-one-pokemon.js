function check_one_pokemon_handler() {
  // read user input
  const input_field = document.getElementById("name-of-pokemon");
  const pokemoname = input_field.value;

  // make api request
  fetch("https://pokeapi.co/api/v2/pokemon/"+pokemoname)
    .then(function(response) {
      // handle HTTP response

      if (response.status === 404) {
        const pokezone = document.getElementById("pokezone");
        while(pokezone.firstChild){
            pokezone.removeChild(pokezone.firstChild);
        }
        pokezone.innerHTML = "something went wrong, check the console";

        throw new Error(pokemoname+" is not a pokemon");
      }

      return response.json();
    })
    .then(function(pokedata) {
      // extract the data you need
      const name = pokedata.name;
      const weight = pokedata.weight;
      const image = pokedata.sprites.front_default;

      console.log("more info about "+name+":", pokedata)

      // write results for user
      const pokezone = document.getElementById("pokezone");
      while(pokezone.firstChild){
          pokezone.removeChild(pokezone.firstChild);
      }

      const poke_img = document.createElement("img");
      poke_img.src = image;

      const poke_p = document.createElement("p");
      poke_p.innerHTML = "this is "+name+", weighing in at "+weight+" units";

      pokezone.appendChild(poke_img);
      pokezone.appendChild(poke_p);
      
    })
    .catch(function(err) {
      // alert user of error
      throw err;
    })

}
const check_it_out_button = document.getElementById("check-it-out");
check_it_out_button.addEventListener("click", check_one_pokemon_handler);

