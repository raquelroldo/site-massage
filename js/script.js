function teste(){
	var x = 20;
	var y = 9;
	var resultado = '';
	
	/*if(x == y){
		resultado = 'Verdadeiro';
	}
	else{
		resultado = 'Falso';
	}*/
	
	//&& equivale a 'and'
	//|| equivale a 'ou'
	/*if(x != y && x >= 10){
		resultado = 'Verdadeiro';
	}
	else{
		resultado = 'Falso';
	}*/
	
	/*if(x != y || x >= 10){
		resultado = 'Verdadeiro';
	}
	else{
		resultado = 'Falso';
	}*/
	
	/*if(x == 5){
		resultado = 'Número igual a 5';
	}
	else if(x == 10){
		resultado = 'Número igual a 10';
	}
	else if(x == 20){
		resultado = 'Número igual a 20';
	}
	else{
		resultado = 'Número inválido';
	}*/
	
	var classificacao = 'mau';
	switch (classificacao){
		case 'mau':
			resultado = 'Uma miséria de nota';
			break;
		case 'fraco':
			resultado = 'Uma nota fraca';
			break;
		default:
			resultado = 'Classificação não definida';
	}
	
	document.getElementById('info').innerHTML = resultado;
}

function teste(){
	//document.getElementById('info').innerHTML = 10 + 20;
	
	var x = 50;
	var y = 20;
	document.getElementById('info').innerHTML = x + y;
}

function teste(){
	//var valor = 'Informática';
	//document.getElementById('info').innerHTML = valor;
	
	//var nome = 'Tiago', apelido = 'Dias';
	//document.getElementById('info').innerHTML = nome + ' ' + apelido;
	
	/*var preco = 12.50;
	var quantidade = 12;
	var total = preco * quantidade;
	document.getElementById('info').innerHTML = total;*/
	
	/*var nomes = ['Tiago', 'Pedro', 'Paulo'];
	document.getElementById('info').innerHTML = nomes[2] + ' e ' + nomes[0];*/
	
	var automoveis = {
		marca:'Opel', 
		ano:2013, 
		cor:'Azul'
	};
	document.getElementById('info').innerHTML = automoveis.marca + ' ' + automoveis.cor + ' (' + automoveis.ano + ')';
	
}

function teste(){
	var valores = [2,4,6,8,10];
	var final = '';
	var automovel = {
		marca:"Mercedes",
		cor:"Preta",
		ano:2018
	}
	var item;
	
	/*for (i = 0; i < valores.length; i++){
		final += valores[i] + '<br>';
	}*/
	
	/*for (item in automovel){
		final += automovel[item] + '<br>';
	}*/
	
	var valor = 1;
	
	/*while(valor <= 10){
		final += valor + ' ';
		valor++
	}*/
	
	do{
		final += valor + ' ';
		valor++
	}
	while(valor <= 10);
	
	document.getElementById('info').innerHTML = final;
}
/*function teste(){
	var final = adicionar(120, 200);
	document.getElementById('info').innerHTML = final;
}
function adicionar(x, y){
	var resultado = x + y;
	return resultado;
}*/


function teste(){
	var x = prompt;
	var y = 9;
	var resultado = '';
	
	
	if(x == 5){
		resultado = 'Número igual a 5';
	}
	else if(x == 10){
		resultado = 'Número igual a 10';
	}
	else if(x == 20){
		resultado = 'Número igual a 20';
	}
	else{
		resultado = 'Número inválido';
	}
	
	document.getElementById('info').innerHTML = resultado;
}



// Variáveis

var nome = 'Tiago'; //Correto
var idade = 43;		//Correto
var class = false; //Incorreto

var nome = 'Tiago', apelido = 'Dias', pais = 'Portugal', idade = 33;

var nome = 'Tiago', 
	apelido = 'Dias', 
	pais = 'Portugal', 
	idade = 33;
	
var animal; //indefinida
animal = 'Tigre';

//Números	
var idade = 43;
var preco1 = 12.50;  //Correto
var preco = 12,50;	//Incorreto
var x = 10 + 30;	//40
var y = x + 20;		//60

//strings
var nome = 'Tiago';
var nome = "Tiago";

//booleans (true/false)
var avancar = false;
var parar = true;

//arrays
var nomes = ['Tiago', 'Pedro', 'Paulo'];

//objetos
var automoveis = {marca:'Opel', ano:2013, cor:'Azul'};

var automoveis = {
	marca:'Opel', 
	ano:2013, 
	cor:'Azul'
};

//Operadores Aritméticos

var x = 10;
var y = 20;

var somatorio = x + y;
var diferenca = x - y;
var produto = x * y;
var quociente = x / y;
var resto = x % y;

var posicao = 10;		//valor inicial
posicao++;				//10 + 1 = 11
posicao--;				//10 - 1 = 9

var x = 10, y = 20;
x +=y; 		//30