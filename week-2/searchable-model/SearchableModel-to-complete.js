// broadens the BasicModel's functionality
class SearchableModel extends BasicModel {

  constructor(_name) {
    super(_name);
  }

  // these static methods are already written for you to use
  //  study them a bit and don't forget to use them!
  static entriesMatch(obj1, obj2) { 
    // try adding your own error handling in here!
    //  are they both objects?

    const obj1_keys = Object.keys(obj1);
    const obj2_keys = Object.keys(obj2);
    if (obj1_keys.length !== obj2_keys.length) {
      return false;
    };

    let they_match = true;
    for (const key in obj1) {
      if ( obj1[key] !== obj2[key] ) {
        they_match = false;
        break;
      }
    }

    return they_match;
  }

  static entryArraysMatch(arr1, arr2) {
    // try adding your own error handling in here!
    //  are they both arrays of objects?

    if (arr1.length !== arr2.length) {
      return false; 
    }

    const arr1_obj = {};
    for (const entry of arr1) {
      arr1_obj[entry._id] = entry;
    }

    const arr2_obj = {};
    for (const entry of arr2) {
      arr2_obj[entry._id] = entry;
    }

    let they_match = true;
    for (const key in arr1_obj) {
      if ( !SearchableModel.entriesMatch(arr1_obj[key], arr2_obj[key]) ) {
        they_match = false;
        break;
      }
    }
    
    return they_match;
  }

  static valuesMatch(x, y) {
    // this method assumes all values are primitives
    //  challenge: rewrite it to compare any type!

    if ( x !== x ) {    // are they both NaN?
      return y !== y;
    } else {            // are they matching not-NaNs?
      return x === y;
    };
  }

  static removeEntryId(entry) {
    // write some type checking if you've got the time

    const copy = JSON.stringify(JSON.parse(entry));
    delete copy._id;
    return copy;
  }

  // nothing below here works, write it!

  static isValidKey(key) {
    // is the key a string?
  }

  get allEntries() {
    // return an array of copies of all objects in the DB
    //    be sure to return copies!
    // this getter will be very useful
    // write it first before the rest of the methods
  }

  verifyEntry(findMe) {
    // make sure the arg is an object
    //  maybe BasicModel has a helpful static method?
    // maybe SearchableModel has a helpful static method
    // return true or false 
  }

  findOneKeyValue(key, value) {
    // make sure the key is valid
    // return one entry with a matching key/value pair
    //  or null if there is none
    //  (ignore the id property in your search)
    // you can assume all values are primitives
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
    //  maybe BasicModel has a helpful static method?
    // return the first entry matching the entire query object
    //  or null if there is none
    //  (ignore the id property in your search)
    // this.allEntries will help
  }
 
  findAllMatching(obj) {
    // make sure the arg is an object
    //  maybe BasicModel has a helpful static method?
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