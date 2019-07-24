function populate_category(category, things_model) {

  const populated = {};
  populated.name = category.name;
  populated.things = [];
  for (let id of category.things) {
    try {
      const thing = things_model.read(id);
      populated.things.push(thing.value);
    } catch(err) {
      populated.things.push("invalid thing id "+id);
    }
  }
  return populated;

}