function update_thing_hander() {

  // --- read user input from the dom ---
  const id_field = document.getElementById("thing-to-update");
  const string_id = id_field.value;
  const id_to_update = Number(string_id);

  const value_field = document.getElementById("new-value");
  const new_value = value_field.value;

  // --- execute core logic ---
  //  update entry in model
  let updated_item = null;
  let err = null;
  try {
    const new_entry = {value: new_value};
    updated_item = things.update(id_to_update, new_entry);
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

  console.log("you updated ", updated_item);

}

const update_thing_button = document.getElementById("update-thing");
update_thing_button.addEventListener("click", update_thing_hander);