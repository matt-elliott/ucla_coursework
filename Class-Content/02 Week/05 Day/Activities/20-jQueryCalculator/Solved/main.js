var firstNumber;
var secondNumber;
var operator;
var result;
var firstNumberFinished = false;
var secondNumberFinished = false;
var firstNumberAccumulator = [];
var secondNumberAccumulator = [];

$('document').ready(function () {

  function doMath() {
    console.log(operator);
    switch(operator) {
      case 'times':
        return firstNumber * secondNumber;
        break;
      case 'minus':
          return firstNumber - secondNumber;
        break;
      case 'plus':
          return firstNumber + secondNumber;
        break;
      case 'divide':
          return firstNumber / secondNumber;
        break;
      case 'power':
          return firstNumber ** secondNumber;
    }
  }

  function updateDOM(element, things) {
    $(element).text(things);
  }

  //listen for user input and grab values
  $('.number').click(function () {
    var value = $(event.currentTarget).attr('value');

    if (!firstNumberFinished) {
      firstNumberAccumulator.push(value);
    } else if(!secondNumberFinished) {
      secondNumberAccumulator.push(value);
    } else {
      return false;
    }
  });

  $('.operator').click(function () {
    var value = $(event.currentTarget).attr('value');

    if (!firstNumberFinished) {
      firstNumberFinished = true;
      firstNumber = parseInt(firstNumberAccumulator.join(''));
    }

    operator = value;
  });
    
  $('.equal').click(function () {
    if (!secondNumberFinished) {
      secondNumber = parseInt(secondNumberAccumulator.join(''));
    }

    var result = doMath();
    updateDOM('#result', result);
  });
});