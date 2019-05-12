// front-end logic
$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    $("div#div-output").html("");

    // get and validate form input
    var num1Input = parseInt($("input#number1").val());
    var num2Input = parseInt($("input#number2").val());

    // get and show output
    $("div#div-output").html(rngNumbers(num1Input, num2Input));
  });
});

// biz logic
var rngNumbers = function(num1, num2) {
// returns array of numbers between num1 and num2 inclusive with certain exceptions
// 0 is always returns as 0, divisible by 3 returned as ping, by 5 as pong and by 15 as ping pong
// assumes that num1 and num2 are positive integers
  var arrTemp = [];
  for(var counter = num1; counter <= num2; counter += 1) {
    if ( counter === 0 ) {
      arrTemp.push(counter);
    } else if ( counter % 15 === 0) {
      arrTemp.push("ping pong");
    } else if ( counter % 5 === 0 ) {
      arrTemp.push("pong");
    } else if ( counter % 3 === 0 ) {
      arrTemp.push("ping");
    } else {
      arrTemp.push(counter);      
    }
  }
  return arrTemp;
}