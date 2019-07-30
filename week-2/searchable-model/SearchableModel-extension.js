// broadens the BasicModel's functionality
class SearchableModel extends BasicModel {

  constructor(_name) {
    super(_name);
  }

  get allEntries() {
    // return an array of copies of all objects in the DB
    //    be sure to return copies!
    // this getter will be very useful
    // write it first before the rest of the methods
  }

  static isValidKey(key) {
    // keys must be strings
    // return true or false
  }

  verifyEntry(obj) {
    // make sure the arg is an object
    // check if the object is in the database exactly as it is
      // don't ignore the id! 
    // return true or false 
  }

  findOneKeyValue(key, value) {
    // make sure the key is valid
    // return one entry with a matching key/value pair
    //  or null if there is none
    //  (ignore the id property in your search)
    // this.allEntries will help
  }

  findAllKeyValue(key, value) {
    // make sure the key is valid
    // return an array of all entries with matching key/value pairs
    //  or an empty array if there are no matches
    //  (ignore the id property in your search)
    // this.allEntries will help
  }

  findOneMatching(obj) {
    // make sure the arg is an object
    // return the first entry matching the entire query object
    //  or null if there is none
    //  (ignore the id property in your search)
    // this.allEntries will help
  }
 
  findAllMatching(obj) {
    // make sure the arg is an object
    // return an array of all entries matching the entire query object
    //  or an empty array if there are none
    //  (ignore the id property in your search)
    // this.allEntries will help
  }

  // --- !! challenge !! ---


  static isValidQuery(query) {
    // check if the arg is an array of objects
    // you do not need to look inside the objects
      // that will happen in the findByQuery method after calling this check
    // do not modify the query!
    // return true or false
  }

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