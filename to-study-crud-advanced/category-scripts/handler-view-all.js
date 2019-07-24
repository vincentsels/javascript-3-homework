function view_all_categories_handler() {

  // --- read user input from the dom ---
  //  no user input to read

  // --- execute core logic ---
  //  extract all entries from DB object into an array
  const all_categories = categories.DB;

  // --- draw result to dom for user ---

  const categories_div = document.getElementById("categories-div");
  while(categories_div.firstChild){
      categories_div.removeChild(categories_div.firstChild);
  };

  const new_component = all_categories_component(all_categories);

  categories_div.appendChild(new_component);
  console.log("you viewed all categories ", all_categories);
}

const view_all_categories_button = document.getElementById("view-categories");
view_all_categories_button.addEventListener("click", view_all_categories_handler);