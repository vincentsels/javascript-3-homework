// notice how the third layer is written in the promise callback

function get_random_cat_handler() {
  // read user input
  // no user input

  // make api request
  fetch("https://aws.random.cat/meow", {method: "GET"})
    .then(function(response) {
      return response.json();
    })
    .then(function(cat_obj) {
      // write results for user
      const catspace = document.getElementById("catspace");
      while(catspace.firstChild){
          catspace.removeChild(catspace.firstChild);
      }

      const cat_img = document.createElement("img");
      cat_img.src = cat_obj.file;

      catspace.appendChild(cat_img);
      
    })
    .catch(function(err) {
      // alert user of error
      const catspace = document.getElementById("catspace");
      while(catspace.firstChild){
          catspace.removeChild(catspace.firstChild);
      }

      const err_p = document.createElement("p");
      err_p.src = "something went wrong, check the console";

      catspace.appendChild(err_p);

      throw err;
    })
}
const get_random_cat_button = document.getElementById("get-random-cat");
get_random_cat_button.addEventListener("click", get_random_cat_handler);