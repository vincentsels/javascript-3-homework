console.nativeAssert = console.assert;

console.assert = function(assertion, exercise) {

                    // this bit isn't so bad to understand
                    //   it makes sure the exercise div is red if even one assert has failed

                    var div_id = exercise.split(" ").join("-");
                    var exercise_div = document.getElementById(div_id);
                    var div_color = exercise_div.style.backgroundColor

                    if (assertion && div_color === "") {
                      exercise_div.style.backgroundColor = "green";

                    } else if(!assertion && div_color === "") {
                      exercise_div.style.backgroundColor = "red";

                    } else if(!assertion && div_color === "green") {
                      exercise_div.style.backgroundColor = "red";

                    }


                    // this bit is a bit tricky
                    // it makes this method log more like the native console.assert does
                    // some links to help understand what's happening
                    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
                    //   https://stackoverflow.com/questions/19903841/removing-an-argument-from-arguments-in-javascript

                    if (!assertion) {
                      Array.prototype.shift.call(arguments); 
                      console.error(...arguments);
                      // using .error to log the callstack. Debugger practice!
                    }

                  };