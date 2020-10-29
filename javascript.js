


let norbert = {
	nom:'Norbert',
	prix: 2900,
	id:'5be9c8541c9d440000665243'
};


let arnold = {
	nom:'Arnold',
	prix: 3900,
	id:'5beaa8bf1c9d440000a57d94'
};


let lennyAndCarl = {
	nom:'Lenny and Carl',
	prix: 5900,
	id:'5beaaa8f1c9d440000a57d95'
};


let gustav = {
	nom:'Gustav',
	prix: 4500,
	id:'5beaabe91c9d440000a57d96'
};


let garfunkel = {
	nom:'Garfunkel',
	prix: 5500,
	id:'5beaacd41c9d440000a57d97'
};


let produit = [
	'Norbert',
	'Arnold',
	'Lenny and Carl',
	'Gustav',
	'Garfunkel']



function acceuil(){
	console.log( "acceuil" )

}

function produits(){
	console.log( "produits" )

}
mel
function produitOurs(){
	console.log( "produitOurs" )

}

function panier(){
	console.log( "panier" )

}



var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/api/teddies");
xhr.responseType = "json";
xhr.send();
httpRequest.onreadystatechange = produits;



var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();