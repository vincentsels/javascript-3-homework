function delete_entry_handler() {
  // read user input
  const user_input_field = document.getElementById("entry-to-delete");
  const id_string = user_input_field.value;
  const id_to_delete = Number(id_string);

  // perform core logic
  const this_model = models[current_model];

  const old_entry = this_model.remove(id_to_delete);

  const all_entries = this_model.DB;
  const model_entries = [];
  for (let key in all_entries) {
    model_entries.push(all_entries[key]);
  }

  // show results to user
  const model_div = document.getElementById("one-model-div");
  while(model_div.firstChild){
      model_div.removeChild(model_div.firstChild);
  }

  const model_ul = document.createElement("ul");
  for (let entry of model_entries) {
    const next_li = document.createElement("li");
    next_li.innerHTML = entry.id+": "+entry.value;
    model_ul.appendChild(next_li);
  }

  model_div.appendChild(model_ul);

  console.log("you just deleted "+old_entry.value+" from the "+current_model+" model");

}

const delete_entry = document.getElementById("delete-entry");
delete_entry.addEventListener("click", delete_entry_handler);