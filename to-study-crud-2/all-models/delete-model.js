function delete_model_handler() {
  // read user input
  const user_input_field = document.getElementById("name-to-delete");
  const name_to_delete = user_input_field.value;

  // perform core logic
  delete models[name_to_delete];

  const model_names = [];
  for (let name in models) {
    model_names.push(name);
  }

  // show results to user
  const models_div = document.getElementById("all-models-div");
  while(models_div.firstChild){
      models_div.removeChild(models_div.firstChild);
  }

  const models_ul = document.createElement("ul");
  for (let model_name of model_names) {
    const next_li = document.createElement("li");
    next_li.innerHTML = model_name;
    models_ul.appendChild(next_li);
  }

  models_div.appendChild(models_ul);

  console.log("you just deleted the "+name_to_delete+" model");
}

const delete_model_button = document.getElementById("delete-model");
delete_model_button.addEventListener("click", delete_model_handler);