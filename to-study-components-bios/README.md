# GitHub User Bios

Add and view github user bios in this simple app

### Project Setup

Create an empty HTML file with header, body, ...

### User Stories

| _a user can ..._ | html |handler (top) | handler (middle) | handler (bottom) |   listener |
| --- | --- | --- | --- | --- | --- |
| _... preview a bio_ | button, 2 inputs & script |  read the username and img url from the input fields | (nothing to do here, the data is being rendered directly as is) | clear output div, render the array of entries into a __ul__,  append __ul__ to output div |  connect the __view\_all__ handler to the new button |
| _... view one city_ | input, button & script | read id from user input and cast to number  | read city from the cities object by id | clear output div, render country details to output div | connect the __view\_one__ handler to the new button |
| _... add a city_ | 3  inputs, button &  script | read all user input, cast population to a number | build new city object, store it in cities object with | clear output div, render country details to output div | connect the __create\_city__ handler to the new button |
| _... update a city's population_ | 2  inputs, button &  script | read all user input, cast it to numbers  | read their chosen city from the cities object, update it's population property, save changes to cities | clear output div, display the city's old and new populations | connect the __update\_city__ handler to the new button |
| _... remove a city_ | input, button & script | read id from user input and cast to number  | remove the city  | clear output div, let the user know which city was deleted | connect the _remove\_city_ handler to the new button |



___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
