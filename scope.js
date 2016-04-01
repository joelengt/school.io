// var a = 5;

// function foo (){
// 	var b = a *4;
// 	function bar (c){
// 		var b = 2;
// 		console.log(a,b,c);
// 	}
// 	bar(b*10);
// }

// console.log(foo());

// (function(){

// })();

var a= 1, b= 2, c= 3;

(function firstFunction(){
	var b= 5, c= 6;

	(function secondFunction(){
		var b= 8;
		console.log('a: ' + a + ', b: '+ b + ', c: ' + c);
		(function thirdFunction(){
			var a= 7, c=9;

			(function fourthFunction(){
				var a=1, c=8;

			})();
		})();
	})();
})();

