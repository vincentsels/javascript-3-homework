// broadens the BasicModel's functionality
class SearchableModel extends BasicModel {

  constructor(_name) {
    super(_name);
  }

  get allEntries() {
    // return an array of copies of all objects in the DB
    // this getter will be very useful
    // write it first before the rest of the methods
  }

  static isValidKey(key) {
    // keys must be strings
    // return true or false
  }

  static isValidQuery(query) {
    // check if the arg is an array of objects
    // you do not need to look inside the objects
      // that will happen in the findByQuery method after calling this check
    // do not modify the query!
    // return true or false
  }

  findOneKeyValue(key, value) {
    // make sure the key is valid
    // return one entry with a matching key/value pair
    // this.allEntries will help
  }

  findAllKeyValues(key, value) {
    // make sure the key is valid
    // return an array of all entries with matching key/value pairs
    // this.allEntries will help
  }

  findOneMatchingEntry(obj) {
    // make sure the arg is an object
    // return one entry matching the entire query object
    // (ignore the id property)
    // this.allEntries will help
  }
 
  findAllMatchingEntries(obj) {
    // make sure the arg is an object
    // return an array of all entries matching the entire query object
    // (ignore the id property)
    // this.allEntries will help
  }

  verifyEntry(obj) {
    // make sure the arg is an object
    // check if the object is in the database exactly as it is
      // don't ignore the id! 
    // return true or false 
  }

  // challenge !!
  findByQuery(query) {
    // make sure the query is an array of objects
      // instanceof will be helpful to check if query is an array
      // and BasicModel.isAnObject will helpful for checking it contains objects
    // return an array of copies of all entries matching the query

    /* more info:
      write a method that searches for entries matching multiple criteria
      all criteria must match in order for an object to be returned
      criteria are defined as a an array of objects like this:
        [ 
          {key: {value: "a value", matches: Boolean}}, 
          {key: {value: "a value", matches: Boolean}}, 
        ]
      you can look for positive and negative results
      {chair: {value: "wood", matches: false}}
        indicates all entries without a property chair: "wood"
      {table: {value: "metal", matches: true}}
        indicates all entries with a property table: "metal"
      [
        {chair: {value: "wood", matches: false}},
        {table: {value: "metal", matches: true}}
      ]
        indicates all properties without a wood chair and with a metal table
      if no such properties exist, you can simply return an empty array
    */
  }

}