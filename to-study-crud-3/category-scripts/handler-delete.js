function delete_category_hander() {

  // --- read user input from the dom ---
  const user_input_field = document.getElementById("category-to-delete");
  const string_id = user_input_field.value;
  const id_to_delete = Number(string_id);

  // --- execute core logic ---
  //  add new category to categorys model
  let deleted_item = null;
  let err = null;
  try {
    deleted_item = categories.remove(id_to_delete);
  } catch (thrown_err) {
    err = thrown_err;
  }

  const categories_DB = categories.DB;

  // --- draw result to dom for user ---
  const categories_div = document.getElementById("categories-div");
  while(categories_div.firstChild){
      categories_div.removeChild(categories_div.firstChild);
  };

  if (err) {
    const err_component = category_error_component(err);
    categories_div.appendChild(err_component);
    console.error(err);
  }

  const all_categories = all_categories_component(categories_DB);
  categories_div.appendChild(all_categories);

  console.log("you deleted ", deleted_item);
}

const delete_category_button = document.getElementById("delete-category");
delete_category_button.addEventListener("click", delete_category_hander);