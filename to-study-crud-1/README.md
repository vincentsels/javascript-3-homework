# Beginner Modeling User Stories

### Project Setup

Create an empty HTML file with: 
* A script tag requiring ```BasicModel.js```
* A script tag initializing a new instance of the ```BasicModel``` class
* A header for your web page
* An empty div with id for writing output to the user

### User Stories

| _a user can ..._ | html |handler (top) | handler (middle) | handler (bottom) |   listener |
| --- | --- | --- | --- | --- | --- |
| _... view all cities_ | button & script | (no user input)  | read all entries of the __cities__ model into an array | clear output div, render the array of entries into a __ul__,  append __ul__ to output div |  connect the __view\_all__ handler to the new button |
| _... view one city_ | input, button & script | read id from user input and cast to number  | read city from model by id | clear output div, render country details to output div | connect the __view\_one__ handler to the new button |
| _... add a city_ | 3  inputs, button &  script | read all user input, cast population to a number | build new city object, store it in cities model with __cities.create__, capture new model entry in a variable | clear output div, render country details to output div | connect the __create\_city__ handler to the new button |
| _... update a city's population_ | 2  inputs, button &  script | read all user input, cast it to numbers  | read their chosen city from the model, update it's population property, save changes to the model with __model.update__ | clear output div, display the city's old and new populations | connect the __update\_city__ handler to the new button |
| _... remove a city_ | input, button & script | read id from user input and cast to number  | remove  | clear output div, let the user know which city was deleted | connect the _remove\_city_ handler to the new button |



___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
