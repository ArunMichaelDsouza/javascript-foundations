/* Algorithm to find factorial of a number

Pseudo code : 
1 begin

2 get the value of which the factorial is to be found

3 iterate from 1 to the value 
  loop(1 to value)

4 set factorial value to 1

5 keep multiplying the iterator to the factorial value and save it back to this value
  factorial = factorial * iterator

6 stop once the iterator becomes bigger than the value and print out the result
  when iterator > value
  	end loop
    
  print factorial

7 end
*/

// Implementation

(function() {
    'use strict';

    // Declare variables
    var num = 12,
        factorial = 1;

    // Calculate factorial
    while(num > 0) {
      factorial *= num; num--;
    }

    // Print factorial of number
    console.log('Factorial is : ' + factorial);
})();
