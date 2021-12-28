$(document).ready(function() {
      //if(isNaN(localStorage.getItem("username"))) 
      //{
      //    window.location.href = 'authorization.html';  
      //} 
      $('#userprofile').show();
      $('#useractivecars').hide();
      $('#userpayment').hide();
      $('#userpastcars').hide();
      $("div#useractivecars").removeClass("hidden");
      $("div#userpayment").removeClass("hidden");
      $("div#userpastcars").removeClass("hidden");
      $("#carclass1").prop("checked", true);
      $('#username').text(localStorage.getItem('username'));
      $('#userlogin').text(localStorage.getItem('userlogin'));
      $('#userlogin2').text(localStorage.getItem('userpassword'));
});

$('.car').find('.buybutton').on('click', function(){
      var carname = $(this).parents('.car').find('.carname').text()
      var carprice = $(this).parents('.car').find('.carprice').text()
      console.log(carname);
      $('#cover').fadeIn(250);
      $('#cover').find(".buy_car_name").text(carname);
      $('#cover').find("span").find("b").text(carprice);
});

$('#carclass1').on('click', function(){
      $('#userprofile').show();
      $('#useractivecars').hide();
      $('#userpayment').hide();
      $('#userpastcars').hide();
});

$('#carclass2').on('click', function(){
      $('#userprofile').hide();
      $('#useractivecars').show();
      $('#userpayment').hide();
      $('#userpastcars').hide();
});

$('#carclass3').on('click', function(){
      $('#userprofile').hide();
      $('#useractivecars').hide();
      $('#userpayment').show();
      $('#userpastcars').hide();
});

$('#carclass4').on('click', function(){
      $('#userprofile').hide();
      $('#useractivecars').hide();
      $('#userpayment').hide();
      $('#userpastcars').show();
});

$('#userprofile').find("#exitbutton").on('click', function(){
      localStorage.setItem('username', NaN);
      localStorage.setItem('userlogin',NaN);
      localStorage.setItem('userpassword', NaN);
      window.location.href = "index.html";
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