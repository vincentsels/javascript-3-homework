function add_entry_handler() {
  // read user input
  const user_input_field = document.getElementById("new-entry");
  const new_value = user_input_field.value;

  // perform core logic
  const this_model = models[current_model];
  this_model.create({value: new_value});

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

  console.log("you just added "+new_value+" to the "+current_model+" model");

}

const add_entry = document.getElementById("add-entry");
add_entry.addEventListener("click", add_entry_handler);