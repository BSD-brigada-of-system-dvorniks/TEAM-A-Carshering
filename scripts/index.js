var carprice;

$(document).ready(function() {
      //$("div#extraControls").removeClass("hidden");
      $('#cover').hide();
});

$('.car').find('.buybutton').on('click', function(){
      var carname = $(this).parents('.car').find('.carname').text();
      carprice = $(this).parents('.car').find('.carprice').text();
      console.log(carname);
      $('#cover').fadeIn(250);
      $('#cover').find(".buy_car_name").text(carname);
      $('#cover').find(".buybutton").find("b").text(carprice);
});

$('#closebuypanel').on('click', function(){
      $("#starttime").val("");
      $("#endtime").val("");
      $('#cover').fadeOut(250); 
});

$('#cover').find('.buybutton').on('click', function(){
      window.location.href = 'https://fondy.ua/uk/payment-page/';
});

$(".buypanel").on("change", "input[type='date']", function () {
      console.log("test");
      var starttime = ($("#starttime").val()).split('-').map(Number);
      var endtime = ($("#endtime").val()).split('-').map(Number);
      var rentaltime = 365*(endtime[0] - starttime[0]) + 30*(endtime[1] - starttime[1]) + (endtime[2] - starttime[2]);
      console.log(starttime);
      console.log(endtime);
      console.log(rentaltime);
      console.log(carprice);
      if(isNaN(rentaltime))
      {

      }
      else
      {
            $('#cover').find(".buybutton").find("b").text(carprice*rentaltime);
      }
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