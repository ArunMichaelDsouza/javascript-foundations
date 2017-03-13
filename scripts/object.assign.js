// Object.assign 

// Primitive types are always passed by value
var string1 = 'string1';
	string2 = string1;

string2 = 'string2';
console.log(string1);
console.log(string2);

var num1 = 100;
	num2 = num1;

num2 = 200;
console.log(num1);
console.log(num2);

// Objects and arrays are passed by reference
var object1 = {name: 'test', id: 123},
	object2 = object1;

console.log(object1);
console.log(object2);

object2.id = 200;

console.log(object1); // Updates original object as well
console.log(object2);

// Using Object.assign
var object3 = {name: 'test', id: 123},
	object4 = Object.assign({}, object3);

object4.id = 200;

console.log(object3); // Remains same as old value
console.log(object4);

// For arrays
var arr1 = [1,2,3],
	arr2 = arr1;
  
  arr2.push(4);
  
console.log(arr1); // Updates original object as well
console.log(arr2);

var arr3 = [1,2,3,4,5],
	arr4 = arr3;
  
  arr4 = arr4.concat([6]);
  
console.log(arr3); // Remains same as old value
console.log(arr4);