function view_all_things_handler() {

  // --- read user input from the dom ---
  //  no user input to read

  // --- execute core logic ---
  //  extract all entries from DB object into an array
  const things_DB = things.DB;

  // --- draw result to dom for user ---
  const things_div = document.getElementById("things-div");
  while(things_div.firstChild){
      things_div.removeChild(things_div.firstChild);
  }

  const all_things = all_things_component(things_DB);
  things_div.appendChild(all_things);

  console.log("you viewed all things", things_DB)
}

const view_all_things_button = document.getElementById("view-things");
view_all_things_button.addEventListener("click", view_all_things_handler);