function add_to_category_handler() {

  // --- read user input from the dom ---
  const thing_id_field = document.getElementById("thing-to-add");
  const thing_string_id = thing_id_field.value;
  const thing_id = Number(thing_string_id);

  const category_id_field = document.getElementById("category-to-update");
  const category_string_id = category_id_field.value;
  const category_id = Number(category_string_id);

  // --- execute core logic ---
  //  push new id into things array of given category
  let updated_item = null;
  let populated = null;
  let err = null;
  try {
    const category = categories.read(category_id);
    category.things.push(thing_id);
    updated_item = categories.update(category_id, category);
    populated = populate_category(updated_item, things);
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
  console.log("you added to ", populated);
}
const add_to_category_button = document.getElementById("add-to-category");
add_to_category_button.addEventListener("click", add_to_category_handler);