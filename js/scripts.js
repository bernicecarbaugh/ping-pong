// front-end logic
$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    // reset from previous runs
    $("#div-output").html("");
    $("#div-number1").removeClass("has-error");
    $("#div-number2").removeClass("has-error");
    
    // get and validate form input
    var num1Input = parseInt($("#number1").val());
    var num2Input = parseInt($("#number2").val());

    // show output if valid inputs; else show alert
    if ( validInputs(num1Input, num2Input)) {
      $("div#div-output").html(rngNumbers(num1Input, num2Input));
    }
  });

  // returns true if inputs are valid
  var validInputs = function(num1, num2) {
      var num1Valid = true;
      var num2Valid = true;
      
    // check each input individually
    if (!isZeroOrPositive(num1) ) {
      setErr("#div-number1","#span-err-number1", " Specify a zero or positive integer.");
      num1Valid = false;
    }

    if (!isZeroOrPositive(num2) ) {
      setErr("#div-number2","#span-err-number2", " Specify a zero or positive integer.");
      num2Valid = false;
    }

    // compare the 2 inputs: that 2nd >= 1st and no more than 100 in between
    // if either false; set alerts
    if ( num1Valid && num2Valid ) {
      if (num2 < num1) {
        setErr("#div-number1","#span-err-number1", " First number must be smaller or equal to second number.");
        setErr("#div-number2","#span-err-number2", " Second number must be larger or equal to first number.");
        return false;
      } else if (num2 - num1 > 100) {
        setErr("#div-number1","#span-err-number1", " Choose a smaller range; no more than 100 numbers please.");
        setErr("#div-number2","#span-err-number2", " Choose a smaller range; no more than 100 numbers please.");
        return false;
      } else {
        return true;
      }
    }
  }

  // returns true is input is zero or positve number; false otherwise
  var isZeroOrPositive = function(input) {
    if (!input && input !=0) return false; // if any other falsey besides 0 -> false
    if (isNaN(input)) return false; // if not a number -> false
    if (input < 0) return false; // if negative number -> false
    return true;
  }

  // set error styling on divDomID and also displays error message
  var setErr = function(divDomId, msgDomId, msg) {
    $(divDomId).addClass("has-error");
    $(msgDomId).text(msg);
  }

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