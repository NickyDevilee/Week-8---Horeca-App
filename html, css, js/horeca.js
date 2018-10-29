// Nicky Devilee
// Bol4 applicatieontwikkelaar
// Week 8 - JavaScript
// opdracht: Week 8 - Horeca App

var fris = 0;
var bier = 0;
var wijn = 0;
var keuze;
var bittersmall = 0;
var bitterbig = 0;
var prijsfris = 0; // €1.5
var prijsbier = 0; // €2
var prijswijn = 0; // €3.5
var prijsbittersmall = 0; // €3
var prijsbitterbig = 0; // €5
var totaalprijs = 0;

// via de functie bestelling kun je keuze's maken of je bier, fris, wijn of snacks wilt. wanneer er stop word ingetypt stopt de functie en roept dit de functies prijsberekenen en totaalprijs aan.
function bestelling() {
	var keuze = prompt('Welke bestelling wilt u toevoegen? Bier, fris, wijn of snack. Typ "stop" in om de bestelling te stoppen.');
		if (keuze == 'wijn') {
			wijn = wijn + parseInt(prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?'));
			bestelling();
		}
			else if (keuze == 'fris') {
				fris = fris + parseInt(prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
				bestelling();
			}
				else if (keuze == 'bier') {
					bier = bier + parseInt(prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
					bestelling();
				}
					else if (keuze == 'snack') {
						bitterbestel();
					}
						else if (keuze == 'stop') {
							prijsberekenen();
							totaal();
						}
		else{
			alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd, begin opnieuw.');
			bestelling();
		}
}

// via de functie bitterbestel kun je bitterballen bestellen. wanneer je een ander aantal dan 8 of 16 intypt krijg je een foutmelding dat de bestelling niet kan worden toegevoegd.
function bitterbestel() {
	var bitterbal = parseInt(prompt('Hoeveel bitterballen wilt u toevoegen (8 of 16)?'));
		if (bitterbal == '8') {
			bittersmall = bittersmall + parseInt(prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?'));
			bestelling();
			return;
		}
			if (bitterbal == '16') {
				bitterbig = bitterbig + parseInt(prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?'));
				bestelling();
				return;
			}
				if (bitterbal != '8' || bitterbal != '16') {
					alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
					bestelling();
					return;
				}
}

// via de functie prijsberekenen word de prijs berekend van alle drankjes en snacks
function prijsberekenen() {
	prijsbier = bier*2;
	prijswijn = wijn*3.5;
	prijsfris = fris*1.5;
	prijsbittersmall = bittersmall*3;
	prijsbitterbig = bitterbig*5;
}

// via de functie totaal word de totaal prijs berekend.
function totaal() {
	totaalprijs = prijsfris + prijswijn + prijsbier + prijsbittersmall + prijsbitterbig;
		if (wijn >= 1) {
			document.write(wijn + ' wijn = €' + prijswijn + '<br>');
		}
			if (fris >= 1) {
				document.write(fris + ' fris = €' + prijsfris + '<br>');
			}
				if (bier >= 1) {
					document.write(bier + ' bier = €' + prijsbier + '<br>');
				}
					if (bittersmall >= 1) {
						document.write(bittersmall + 'x bitterbalschaal (8stuks) = €' + prijsbittersmall + '<br>');
					}
						if (bitterbig >= 1) {
							document.write(bitterbig + 'x bitterbalschaal (16stuks) = €' + prijsbitterbig + '<br>');
						}
}

document.write('Bestelling:' + '<br>' + '<br>')
bestelling();
document.write('<br>' + '============================================' + '<br>' + '<br>' + 'Totaalprijs:' + '<br>' + '<br>');
document.write('€' + totaalprijs);