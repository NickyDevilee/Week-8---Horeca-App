// Nicky Devilee
// Bol4 applicatieontwikkelaar
// Week 8 - JavaScript
// opdracht: Week 8 - Horeca App

// parseInt(prompt('Hoeveel fris wil je?'));
// document.write('totaalprijs: €' + fris*aantal);
// var fris = 1.50;
// var bier = 2;
// var wijn = 3.50;
// keuze = 'bier' || keuze = 'fris' || keuze = 'wijn'

// function 1() {
// 	if (keuze == 'bier' || keuze == 'fris' || keuze == 'wijn') {
// 		var aantal = parseInt(prompt('Hoeveel ' + keuze + ' wilt u toevoegen aan uw bestelling?'));
// 		document.write('Toegevoegd aan de bestelling: ' + aantal + keuze + '<br>');
// 		1();
// 	}else if (keuze == 'stop') {

// 	}else{
// 		alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd, begin opnieuw.');
// 	}
// }

var fris = 0;
var bier = 0;
var wijn = 0;

function bestelling() {
	var keuze = prompt('Welke bestelling wilt u toevoegen? Typ "stop" in om de bestelling te stoppen.');
	if (keuze == 'wijn') {
		var wijn = parseInt(prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?'));
		bestelling();
		document.write(wijn + ' wijn' + '<br>');
	}
		else if (keuze == 'fris') {
			var fris = parseInt(prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
			bestelling();
			document.write(fris + ' fris' + '<br>');
		}
			else if (keuze == 'bier') {
				var bier = parseInt(prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
				bestelling();
				document.write(bier + ' bier' + '<br>');
			}
				else if (keuze == 'stop') {

				}
					else{
						alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd, begin opnieuw.');
						bestelling();
					}
}

// document.write('Bestelling:' + '<br>' + '<br>')
// bestelling();

var prijsfris = 1.50;
var prijsbier = 2;
var prijswijn = 3.50;

function prijs() {
	// body...
}