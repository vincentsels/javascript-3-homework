function thing_error_component(err) {
  
  const user_message = 'there was an error, check the console';
  const error_p = document.createElement("p");
  error_p.innerHTML = user_message;

  return error_p;
}