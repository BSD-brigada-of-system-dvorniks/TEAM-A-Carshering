$(document).ready(function(){
      $('#reg_form').hide();
      $("div#reg_form").removeClass("hidden");
});

$('#go_auth').on('click', function(){
      $('#reg_form').hide();
      $('#auth_form').show();
      //$('#auth_form').css('dispaly','inline-table');
});

$('#go_reg').on('click', function(){
      $('#auth_form').hide();
      $('#reg_form').show();
      //$('#reg_form').css('dispaly','inline-grid');
});



$('#login_button').on('click', function(){
      var login = $('#auth_login').val()
      var password = $('#auth_password').val()
      console.log(login, password);
      let data = {
        Username: login,
        Password: password,
      };
      console.log(login, password);
      fetch("http://localhost:9010/api/login", {
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
      }).then((response) => {
            response.text().then(function (data) {
                  let result = JSON.parse(data);
                  console.log(result)
                  if (result.status === 'success'){
                        localStorage.setItem('username', $('#reg_name').val());
                        localStorage.setItem('userlogin', login);
                        localStorage.setItem('userpassword', password);
                        window.location.href = "userpage.html";
                  }
            });
      }).catch((error) => {
            console.log(error)
      });
});

$('#reg_button').on('click', function(){
      
      var login = $('#reg_logindata').val()
      var password = $('#reg_password').val()
      console.log(login, password);
      let data = {
        Username: login,
        Password: password,
      };
      console.log(login, password);
      fetch("http://localhost:9010/api/register", {
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
      }).then((response) => {
            response.text().then(function (data) {
                  let result = JSON.parse(data);
                  console.log(result)
                  console.log(result.status)
                  if (result.status === 'success'){
                        localStorage.setItem('username', $('#reg_name').val());
                        localStorage.setItem('userlogin', login);
                        localStorage.setItem('userpassword', password);
                        window.location.href = "userpage.html";
                  }
            });
      }).catch((error) => {
            console.log(error)
      });
      
});

$('#userpagelink').on('click', function(){
      if(isNaN(localStorage.getItem("username"))) 
      {
          window.location.href = 'authorization.html';  
      } 
      else
      {
          window.location.href = 'userpage.html';  
      }
});

