function delete_thing_hander() {

  // --- read user input from the dom ---
  const user_input_field = document.getElementById("thing-to-delete");
  const string_id = user_input_field.value;
  const id_to_delete = Number(string_id);

  // --- execute core logic ---
  //  add new thing to things model
  let deleted_item = null;
  let err = null;
  try {
    deleted_item = things.remove(id_to_delete);
  } catch (thrown_err) {
    err = thrown_err;
  }

  const things_DB = things.DB;

  // --- draw result to dom for user ---
  const things_div = document.getElementById("things-div");
  while(things_div.firstChild){
      things_div.removeChild(things_div.firstChild);
  }

  if (err) {
    const err_component = thing_error_component(err);
    things_div.appendChild(err_component);
    console.error(err);
  }

  const all_things = all_things_component(things_DB);
  things_div.appendChild(all_things);

  console.log("you deleted ", deleted_item);

}

const delete_thing_button = document.getElementById("delete-thing");
delete_thing_button.addEventListener("click", delete_thing_hander);
