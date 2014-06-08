// Basic Operations

function run() {
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
	while(value <= 10) {
		console.log(value);
		value++;
	}

	for(value = 10; value >=1; value--) {
		console.log(value);
	}
}

run(); 

function trains(){
	var totalTrains = 12;
	var specialTrain = 10;
	var operationalTrains = 8;

	// var i = 1;
	// for(i = 1; i <= operationalTrains; i++) {
	// 	console.log("Train #"+i+" is operational");
	// }

	// for(i = operationalTrains+1; i <= totalTrains; i++) {
	// 	console.log("Train #"+i+" is not operational");
	// }

	//Optimising above approach

	for(i = 1; i <= totalTrains; i++) {
		if(i <= operationalTrains) {
			console.log("Train #"+i+" is operational");
		}
		else if(i==specialTrain){
			console.log("Train #"+i+" starts at noon");
		}
		else {
			console.log("Train #"+i+" is not operational");
		}
	}

}

trains();





















