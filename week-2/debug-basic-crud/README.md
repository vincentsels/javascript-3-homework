# Beginner Modeling User Stories

## Debug Me!

There are 2 mistakes in each file, including index.html.  Find them all and fix them.

(try to do this as few peeks at to-study-crud-1 as possible! It's ok to study it as long as you need before beginning, but avoid checking it once you begin to debug)

### Project Setup

Create an empty HTML file  with header, body, ...

### User Stories

| _a user can ..._ | data | handler (top) | handler (middle) | handler (bottom) | html |  listener |
| --- | --- | --- | --- | --- | --- |
| _... view all cities_ | ```cities``` object of city objects: ```{name:"str",country:"str",population:"num",id:"num"}. ```next_id``` variable | (no user input)  | read all entries of the __cities__ object into an array | clear output div, render the array of entries into a __ul__,  append __ul__ to output div | button & script |  connect the __view\_all__ handler to the new button |
| _... view one city_ |  (no changes) | read id from user input and cast to number  | read city from the cities object by id | clear output div, render country details to output div | input, button & script | connect the __view\_one__ handler to the new button |
| _... add a city_ |  (no changes) | read all user input, cast population to a number | build new city object, store it in cities object with | clear output div, render country details to output div | 3  inputs, button &  script | connect the __create\_city__ handler to the new button |
| _... update a city's population_ |  (no changes) | read all user input, cast it to numbers  | read their chosen city from the cities object, update it's population property, save changes to cities | clear output div, display the city's old and new populations |  2  inputs, button &  script |  connect the __update\_city__ handler to the new button |
| _... remove a city_ |   (no changes) | read id from user input and cast to number  | remove the city  | clear output div, let the user know which city was deleted | input, button & script |  connect the _remove\_city_ handler to the new button |


___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
