function clear_div(id) {
  var div = document.getElementById(id);
  while(div.firstChild){
      div.removeChild(div.firstChild);
  }
}