function all_categories_component(categories_db) {

  const all_categories = [];
  for (let key in categories_db) {
    all_categories.push(categories_db[key]);
  }

  const container = document.createElement("div");
  for (let category of all_categories) {
    const category_text = category.id+": "+category.name;
    const new_p = document.createElement("p");
    new_p.innerHTML = category_text;
    container.appendChild(new_p);
  }

  return container;
}