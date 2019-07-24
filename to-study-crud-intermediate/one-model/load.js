function read_model_handler() {
  // read user input
  const user_input_field = document.getElementById("model-to-read");
  const model_name = user_input_field.value;

  // perform core logic

  const one_model = models[model_name];
  if (one_model === undefined) {
    throw new Error("there is no "+model_name+" model");
  }
  
  const all_entries = one_model.DB;

  const model_entries = [];
  for (let key in all_entries) {
    model_entries.push(all_entries[key]);
  }
  
  current_model = model_name;

  // console.log(model_entries)
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

  console.log("you just read the "+current_model+" model");

}

const read_model_button = document.getElementById("read-model");
read_model_button.addEventListener("click", read_model_handler);