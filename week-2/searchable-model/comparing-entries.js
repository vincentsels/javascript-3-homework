// this example illustrates when JSON.stringify does not work for testing objects
// so instead we will use SearchableModel's static methods for testing

{ console.log("- - - when JSON.stringify fails to compare objects - - - ");

  const obj1 = {a:1, b:2};
  const obj2 = {b:2, a:1};

  const obj1str = JSON.stringify(obj1);
  const obj2str = JSON.stringify(obj2);

  console.log("obj1str", obj1str);
  console.log("obj2str", obj2str);
  console.assert(obj1str === obj2str)

} console.log("- - - when JSON.stringify fails to compare objects - - - ");

