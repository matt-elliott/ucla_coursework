# "FizzBuzz"

## File

* *None*

## Instructions

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

var counter = 0;
if counter is less than one hudnered counter + 1
  print counter value to console

  if(counter % 15) print fizzBuzz
  else if counter % 5 print buzz
  else if counter % 3 print fizz

  function fizzbuzzer() {

    for(var count = 0; count < 100; count++) {
      if(count % 15 === 0) {
        console.log('FizzBuzz');
      } else if(count % 5 === 0) {
        console.log('Buzz');
      } else if(count % 3 === 0) {
        console.log('Fizz');
      } else {
        console.log(count);
      }
    }
  }