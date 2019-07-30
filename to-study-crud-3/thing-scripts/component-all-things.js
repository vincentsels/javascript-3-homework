function all_things_component(things_DB) {

  const container = document.createElement("div");

  const all_things = [];
  for (let key in things_DB) {
    all_things.push(things.DB[key]);
  }

  for (let thing of all_things) {
    const thing_text = thing.id+": "+thing.value;
    const new_p = document.createElement("p");
    new_p.innerHTML = thing_text;
    container.appendChild(new_p);
  }

  return container;
}
