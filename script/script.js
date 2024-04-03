function doLogin() {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == "" || psw == ""){
    alert("Username e password obbligatori");
  }
}
