function debracket(code) {
  // this function assumes snippet format is not changed from original exercise
  // it also doesn't attempt to de-tab snippet since there is no standard way to tab

  var splited = code.split("\n");
  splited.pop(); splited.pop();
  splited.shift(); splited.shift();
  return splited.join("\n");
}


function open_in_loupe(id) {
  var script_tag = document.getElementById(id);
  var snippet = script_tag.innerHTML;
  var debracketed = debracket(snippet);
  var encoded = encodeURIComponent(btoa(debracketed));
  var url = "http://latentflip.com/loupe/?code="+encoded+"!!!";
  window.open(url, '_blank');
}



function open_in_louping(id) {
  var script_tag = document.getElementById(id);
  var snippet = script_tag.innerHTML;
  var debracketed = debracket(snippet);
  var encoded = encodeURIComponent(debracketed);
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var de_tabbed = sanitized.replace(/%09/g, '%20%20');
  var url = "http://janke-learning.github.io/louping/?code="+de_tabbed;
  window.open(url, '_blank');
}
