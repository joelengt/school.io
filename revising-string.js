var pizza = 'the most effective code in the world';

// console.log(pizza);
var salida = '';

for(var i= 0; i<= pizza.length -1 ; i++){
	if(pizza[i] == ' '){
		salida += '*';
	}else{
		salida += pizza[i];
	}
}

console.log(salida);