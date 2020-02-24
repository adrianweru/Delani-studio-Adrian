$(document).ready(function(){
  $(".onclick").click(function(){
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
  });
  $(".click").click(function(){
    $(".dev-hidden").toggle();
    $(".Dev-showing").toggle();
  });
  $(".clik").click(function(){
    $(".product-hidden").toggle();
    $(".prod-showing").toggle();
  });


  $(".A").hover(function(){
    $(".name1").slideToggle();
  });
  $(".B").hover(function(){
    $(".name2").slideToggle();
  });
  $(".C").hover(function(){
    $(".name3").slideToggle();
  });
  $(".D").hover(function(){
    $(".name4").slideToggle();
  });
  $(".E").hover(function(){
    $(".name5").slideToggle();
  });
  $(".F").hover(function(){
    $(".name6").slideToggle();
  });
  $(".G").hover(function(){
    $(".name7").slideToggle();
  });
  $(".H").hover(function(){
    $(".name8").slideToggle();
  });

  $("form").submit(function(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if(name=== ""){
      alert("Please enter your details")
    }
    else if(message===""){
      alert("please enter your message");
    }
    else if(email.length<10) {
      alert("please enter your valid email address");
    }
    else{
      alert("Dear "+ name + ", your message has been sent succesfuly.Thank you for contacting us");
    }
  }) ;
});
