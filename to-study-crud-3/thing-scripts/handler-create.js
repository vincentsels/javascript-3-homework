function create_thing_hander() {

  // --- read user input from the dom ---
  const user_input_field = document.getElementById("new-thing");
  const user_input = user_input_field.value;

  // --- execute core logic ---
  //  add new thing to things model
  const new_entry = {value: user_input};
  const new_thing = things.create(new_entry);

  const things_DB = things.DB;

  // --- draw result to dom for user ---
  const things_div = document.getElementById("things-div");
  while(things_div.firstChild){
      things_div.removeChild(things_div.firstChild);
  }

  const all_things = all_things_component(things_DB);
  things_div.appendChild(all_things);

  console.log("you added ", new_thing);
}

const create_thing_button = document.getElementById("create-thing");
create_thing_button.addEventListener("click", create_thing_hander);