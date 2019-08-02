Complete the exercises in ```index.html``` to pass all the asserts.  Each exercise will have some little instructions

- include all the tips for using loupe

For the best Loupe visualizations, make your setTimeouts at least 4000 milliseconds apart.
* Good:
```js
setTimeout(function callback_1() {
  console.log("log 2");
}, 4000);

setTimeout(function callback_2() {
  console.log("log 3");
}, 8000);

setTimeout(function callback_3() {
  console.log("log 1");
}, 0);
```
* Not so Good:
```js
setTimeout(function callback_1() {
  console.log("log 2");
}, 2000);

setTimeout(function callback_2() {
  console.log("log 3");
}, 4000);

setTimeout(function callback_3() {
  console.log("log 1");
}, 0);
```

---

## Formatting Your Solutions

your solution must be formatted like this.  If it is not, there may be errors when you copy or open it in one of the study environments.  To understand why you should take a look at the [debracket function](./open-in.js)
```html
      <script id="solution-1">
{ // replace the "null"s with a number of milliseconds
  let x = "";

  setTimeout(function assert_x() {
      console.assert(x === "javascript", "exercise 1");
  }, null);

  setTimeout(function append_firstname() {
      x += "java";
  }, null);

  setTimeout(function append_lastname() {
      x += "script";
  }, null);

}
      </script>
```

---

## console.assert

when you run these exercises in your browser by opening this ```index.html``` in your browser, your scripts will be calling an over-written ```console.assert``` method (check out the source [right here](./console-assert.js), it's not sooo complicated).   We've overwritten ```console.assert``` instead of creating an entirely new function so that you can copy-paste the same exact code anywhere and it will still work, but with slightly different behavior. This is called "overriding". The native ```.assert``` method is still accessible by ```console.nativeAssert```.

The new ```console.assert``` is better for these exercises than the native one for a few reasons:
* you can practice debugging and inspecting source code by following the callstack in the console (this works best in firefox)
* the color of an exercise's div will quickly let you know if you pass


(beware!  if a div is red it will never go green without refreshing the page, even if you fix your solution in the console)

---

## Resources

https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0
http://latentflip.com/loupe/?code=!!!
https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

parsons practice:
* [simplest](https://janke-learning.github.io/parsonizer/?snippet=function%20close%28x%29%20%7B%0A%20%20return%20function%20closed%28%29%20%7B%0A%20%20%20%20return%20x%3B%0A%20%20%7D%0A%7D)

if you're feeling ambitious, try inspecting closures in the devtools!
___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>

