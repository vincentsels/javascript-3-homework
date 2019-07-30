// take not of each error you find
//  where was it?
//  how did you find it?
//  what was wrong?
//  how did you fix it?
/* 
    write error notes here
*/
function length_handler() {

  fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(movies_data) {
      // perform logic
      const all_movies = [];
      for (let key in movies_data) {
        all_movies.push({
          title: movies_data[key].title,
          length: movies_data[key].running_times,
        });
      }
      
      const sorted_by_length = all_movies.concat().sort((a, b) => a.running_times < b.running_times);

      // display result to user
      const movies_div = document.getElementById("movies-div");
      while(movies_div.firstChild){
          movies_div.removeChild(movies_div.firstChild);
      }

      const lengths_ul = document.createElement("ul");
      for (let movie of sorted_by_length) {
        const next_li = document.createElement("li");
        next_li.innerHTML = movie.length/60+" min: "+movie.title;
        lengths_ul.appendChild(next_li);
      }


    })
    .catch(function(err) {
      console.error(err);
    })

}
var length_button = document.getElementById("length");
length_button.addEventListener(click, lenth_handler);
