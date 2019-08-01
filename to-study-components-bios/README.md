# GitHub User Bios

Add and view github user bios in this simple app

### Project Setup

Create an empty HTML file with header, body, ... etc.

### User Stories

| __a user can ...__ | data  |  handlers |  dom components | html | listeners |
| --- | --- | --- | --- | --- | --- | 
| _... preview a profile_ | (no saved data) | read in username and img url, render it directly into a _bio_ component | a bio component with an image above the username (which is also a hyperlink to their profile) | two input fields, a button, an empty div matching the id from your handler, and a script tag | connect this handler to the new button | 
| _... add profile to list_ | an array of bio objects: ```{un:"username", img:"url"}``` | read in username and img url, make them to the array as a new profile object, render all bios as a list | one that takes an array of bio objects and a component function, then returns a populated list element | an "add profile" button | connect the "add profile" button to this new handler |
| _... view one bio_ | (no change) | a handler that gets a profile id from the button id that clicked it, reads that bio from the list, then renders just that component | refactor the list component to append a button to each bio. it will have id equal to it's array index and its onclick will call this new handler |  (no changes) | (no separate listeners, they're hardcoded in each button) |
| _... render all saved bios_ | (no change here) | (no user input to parse),  (no logic or data manipulation), render a new list component and append it to the display zone | (no new components) | a "render all" button | a listener to connect the new button and handler |

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>

