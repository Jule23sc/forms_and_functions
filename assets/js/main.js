"use strict";

//aufgabe1_1_zahlmultiplizieren
const zahleingabe = document.body.querySelector(".zahleingabe");

function verdoppelZahl(event) {
    const verdoppelZahl = document.getElementById("zahl").value;
    const ergebnis = (verdoppelZahl)*2;
    
    const ergebnisausgabe = document.querySelector(".ergebnisausgabe");
    ergebnisausgabe.innerHTML=ergebnis;
}

//aufgabe1_2_geburtsjahrrechner
const zweiteAufgabe = document.body.querySelector(".zweite_aufgabe");

function altersBerechnung(event) {
//    event.preventDefault();
    const altersBerechnung = document.getElementById("date").value;
//    const alter = 2023-altersBerechnung;

    const berechnetesAlter = document.body.querySelector(".berechnetes_Alter");
    berechnetesAlter.innerHTML = 2023-altersBerechnung;
    console.log(2023-altersBerechnung);
}

//aufgabe1_2_farbwechselbutton
//const colorChange =document.body.querySelector(".dritte_aufgabe");

//function farbwechsel(event) {
//    const farbwechsel = document.getElementById("farbcode").value;
//    const bgc = ();
//
//}