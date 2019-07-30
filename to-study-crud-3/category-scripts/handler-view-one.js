function view_category_handler() {

  // --- read user input from the dom ---
  const id_field = document.getElementById("category-to-view");
  const string_id = id_field.value;
  const id_to_view = Number(string_id);


  // --- execute core logic ---
  //  read one category entry from the model
  let populated = null;
  let err = null;
  try {
    const category = categories.read(id_to_view);
    populated = populate_category(category, things);
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

  let new_component = null;
  if (populated === null) {
    new_component = all_categories_component(categories_DB);
  } else {
    new_component = one_category_component(populated)  ;
  }
  
  categories_div.appendChild(new_component);
  console.log("you viewed ", populated);
}
const view_category_button = document.getElementById("view-one-category");
view_category_button.addEventListener("click", view_category_handler);