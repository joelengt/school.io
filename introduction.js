var Room = function (app){
	var objPadre = this;

	this.test = function (message){
		console.log(message);
	};

	this.prueba = function (){
		objPadre.test('Muajjajaa');
	};
};


var cuartito = new Room();

cuartito.prueba();

function Pato1 (message){
	console.log(message);
}


function Message (ejecutarPato, message){
	ejecutarPato(message);
}


Message(Pato1,"Cuac cuack");