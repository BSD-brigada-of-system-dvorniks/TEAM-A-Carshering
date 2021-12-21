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

$('#reg_form').find('.buybutton').on('click', function(){
      //console.log('1');
      localStorage.setItem('username', $('#reg_name').val());
      localStorage.setItem('userlogin', $('#reg_logindata').val());
      localStorage.setItem('userpassword', $('#reg_password').val());
      window.location.href = "userpage.html";
      //console.log(localStorage.getItem('username'), localStorage.getItem('userlogin'), localStorage.getItem('userpassword'));
});

$('#login_button').on('click', function(){
      var login = $('#auth_login').val()
      var password = $('#auth_password').val()
      console.log(login, password);
      let data = {
        Login: login,
        Password: password,
      };
      console.log(login, password);
      fetch("/get_time", {
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