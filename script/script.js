function doLogin(event) {
   var username = document.getElementById("username").value;
   var psw = document.getElementById("password").value;
   if(username=="" || psw =="") {
       alert("Username e password sono obbligatori");
   } else }
     fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', { 
             method: 'POST',
             headers: { 
                'Content-Type': 'application/json',
             }, 
             body: JSON.stringify({
                "exampleInputUsername": username, 
                "exampleInputPassword": password 
             })
    }) 
      .then(response => responsive.json())
      .then(data => {
         console.log(data);
          window.location.href = "game.html"; // Redirect to game.html
      })
         .catch((error) =>{
          console.error('Error:', error);
      });
   } 
