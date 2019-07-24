/* schemas look like this
  {
    prop_name: {type: 'type', required: Boolean, default: "a value for if it's required and absent"}
  }
  an example:
  {
    userName: {type: "string", required: true, default: "Alex"},
    passWord: {type: "string", required: true, default: "insecure"},
    age: {type: "number", required: false}
  }
*/

// constrains the BasicModel's functionality
class SchemaModel extends BasicModel {

  constructor(_name, _schema) {
    if (!BasicModel.isValidName(_name)) {
      throw new Error("CANNOT INSTANTIATE: name must be a string - ", _name);
    }
    if (!BasicModel.isAnObject(_schema)) {
      throw new Error("CANNOT INSTANTIATE: schema must be an object - ", _schema);
    }

    super(_name);
    this._schema = _schema;
  }

  get schema() {
    return JSON.parse(JSON.stringify(this._schema));
  }

  static isValidEntry(new_entry, schema) {
    // do some fancy logic to make sure new_entry matches this._schema
    // return true if it's valid, or false if it's not
      // if a prop doesn't match and there is no default, false
      // if there is a default, no false
      // if there are extra props, false
      // if there is a missing prop, false
    // don't modify either object!
  }

  static schematizeEntry(new_entry, schema) {
    // fill in all properties that don't match and have a default
      // you may find it easier to build up a new entry rather than modify the old
    // return the valid object
  }

  create(new_entry) {
    if (!BasicModel.isAnObject(new_entry)) {
      throw new Error("CANNOT CREATE "+this._name+": entry is not an object - ", new_entry);
    }
    if (!SchemaModel.isValidEntry(new_entry, this._schema)) {
      throw new Error("CANNOT CREATE "+this._name+": entry does not match schema - ", new_entry);
    }

    const schematized = SchemaModel.schematizeEntry(new_entry, this._schema);
    super.create(schematized);
    
  }

  update(id, new_entry) {
    if (!BasicModel.isValidId(id)) {
      throw new Error("CANNOT UPDATE "+this._name+": id must be a number - ", id);
    }
    if (!BasicModel.entryExists(id, this._DB)) {
      throw new Error("CANNOT UPDATE "+this._name+": no entry with id ", id);
    }
    if (!BasicModel.isAnObject(new_entry)) {
      throw new Error("CANNOT UPDATE "+this._name+": entry is not an object - ", new_entry);
    }
    if (!SchemaModel.isValidEntry(new_entry)) {
      throw new Error("CANNOT UPDATE "+this._name+": entry does not match schema - ", new_entry);
    }

    const schematized = SchemaModel.schematizeEntry(new_entry, this._schema);
    super.upate(id, schematized);
  }

  updateField(id, new_field) {
    // make sure the id is valid
    // and that the entry exists
    // make sure the new_field is an object
    // make sure the new_field fits the schema

    // retrieve the old entry
    // update the property in new_field
    // super.update
    // return new entry
  }

}
