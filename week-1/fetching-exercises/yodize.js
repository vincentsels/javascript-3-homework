// docs: https://funtranslations.com/api/yoda

function yodize() {

  const phrase = document.getElementById("to-yodize").value;

  const encoded = encodeURIComponent(phrase);

  const url = "https://api.funtranslations.com/translate/yoda.json?text="+encoded;

  /*
    use fetch to send a get request to the url above
    then log only the translated phrase
  */

}

document.getElementById("yodize").addEventListener("click", yodize);