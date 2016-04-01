// var pets =['cat','dog','elephant'];

// var filtered = pets.filter(function (pet){
// 	return console.log(pet !== 'elephant');
// });

var numbers = [1,2,3,4,5,6,7,8,9,10];

var filtered = numbers.filter(evenNumbers);

function evenNumbers (number){
	var filtering = number % 2 ==0;
	return filtering;
}

console.log(filtered);

for(var i = 0; i<=filtered.length - 1; i++){
	console.log(filtered[i]);
}
