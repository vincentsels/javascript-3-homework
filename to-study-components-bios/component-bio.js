function bio_component(username, photo_link) {
  var container = document.createElement("div");

  var img = document.createElement("img");
  img.src = photo_link;
 
  var p = document.createElement("p");
  var a = document.createElement("a");
  a.href = "https://github.com/"+username;
  a.target = "_blank";
  a.innerHTML = username;
  p.appendChild(a);

  container.appendChild(img);
  container.appendChild(p);

  return container;
}