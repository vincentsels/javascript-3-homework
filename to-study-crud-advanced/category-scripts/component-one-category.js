// takes in populated categories and renders them
function one_category_component(populated) {

  const category_name_p = document.createElement("p");
  category_name_p.innerHTML = populated.name;

  const things_ul = document.createElement("ul");
  for (let thing of populated.things) {
    const next_li = document.createElement("li");
    next_li.innerHTML = thing;
    things_ul.appendChild(next_li);
  }

  const container = document.createElement("div");
  container.appendChild(category_name_p);
  container.appendChild(things_ul);

  return container;
}