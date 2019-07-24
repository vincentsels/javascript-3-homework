function create_category_hander() {

  // --- read user input from the dom ---
  const user_input_field = document.getElementById("new-category");
  const category_name = user_input_field.value;

  // --- execute core logic ---
  //  add new category to categorys model
  const new_entry = {things: [], name: category_name};
  const new_category = categories.create(new_entry);

  // --- draw result to dom for user ---
  const categories_div = document.getElementById("categories-div");
  while(categories_div.firstChild){
      categories_div.removeChild(categories_div.firstChild);
  };

  const new_component = all_categories_component(categories.DB);

  categories_div.appendChild(new_component);
  console.log("you added ", new_category);
}

const create_category_button = document.getElementById("create-category");
create_category_button.addEventListener("click", create_category_hander);