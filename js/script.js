// Basic Operations

function run ()
{
	var compute = ((13+2)*34-2);
	console.log(compute);

	var string = "IlovemyMacbookPro".length;
	console.log(string);

	var string1 = "Hello";
	var string2 = "World";
	console.log(string1+" "+string2+"!");

	var num = 10;
	console.log(num+=10);
	console.log(num-=10);
	console.log(num*=10);
	console.log(num/=10);

	var str1 = "asdas dasdsadasdasdsad";
	var str2 = "Adasdasdasdasd";

	console.log(str1==str2);

	console.log(str2[0]);

	console.log(str1.charAt(5));

	num = 12345;
	console.log(num);

	var value = 1;
	while(value<=10)
	{
		console.log(value);
		value++;
	}
}

run(); 

