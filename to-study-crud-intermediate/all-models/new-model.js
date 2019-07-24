function new_model_handler() {
  // read user input
  const user_input_field = document.getElementById("new-model-name");
  const new_model_name = user_input_field.value;

  // perform core logic
  const new_model = new BasicModel(new_model_name);
  models[new_model_name] = new_model;

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

  console.log("you just created the "+new_model_name+" model");

}

const new_model_button = document.getElementById("add-new-model");
new_model_button.addEventListener("click", new_model_handler);