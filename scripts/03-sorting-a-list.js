var list = [3,1,5,2,4];

var min = list[0];

for(var i=0; i<list.length; i++) {
	var min = i;
	for(var j=i+1; j<list.length; j++) {
		if(list[j] < list[min]) {
			var temp = list[min];
			list[min] = list[j];
			list[i] = list[min];
			list[j] = temp;
		}
	}
}

console.log(list);

