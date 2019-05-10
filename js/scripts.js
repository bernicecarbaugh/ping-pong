// front-end logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("div#div-output").html("Hello");
  });

});

// biz logic