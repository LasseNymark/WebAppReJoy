"use strict";

// Variabler til feedets grid - med produkter og navne

let recycles = [{
        beskrivelse: "Sort Sofa",
        address: "Vestergade 18",
        img: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29216260_1002610293229959_6557739202647448962_n.jpg?_nc_cat=106&_nc_ht=scontent-amt2-1.xx&oh=e797dff57ce3b4362b7838f320cfab64&oe=5D25EFDF"
  },
    {
        beskrivelse: "Chaiselong Sort",
        address: "Søndervang 45",
        img: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29244014_1002610289896626_3213809700274496725_n.jpg?_nc_cat=103&_nc_ht=scontent-amt2-1.xx&oh=ff6fc4954095c1b00e9ed361230ed7e5&oe=5CE579EE"      
  },
    {
        beskrivelse: "Sort kommode",
        address: "Dannebrogsgade 12",
        img: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/52025744_1254206084737044_8582339204330029056_n.jpg?_nc_cat=104&_nc_ht=scontent-amt2-1.xx&oh=a9f67092c8ef8b258b35745b8aaaa4a9&oe=5CECFA40"
    }
];

console.log(recycles);

// Array appendes til DOM, via innerHTML

function appendRecycles(recycles) {
    for (let recycle of recycles) {
        console.log(recycle);
        document.querySelector("#grid-teachers").innerHTML += `
     <article>
            <div id="productpopup">
                <img class="imgpreview" src='${recycle.img}'>
                <h3>${recycle.beskrivelse}</h3>
                <h2>${recycle.address}</h2><br>
            </div>
            <input id="heart" type="checkbox" />
            <label id="label1" for="heart">❤</label>
    </article>
    `;
    }
}

// Array appendes til DOM

appendRecycles(recycles);

/* Her tilføjes der ny et nyt objekt */

function createRecycle() {
    // Henter værdier fra input form
    let beskrivelse = document.querySelector('#add-recycle-form input[name=beskrivelse]').value;
    let address = document.querySelector('#add-recycle-form input[name=address]').value;

    // Nyt objekt kaldes
    let newrecycle = {
        beskrivelse: beskrivelse,
        address: address,
        img: selectedimage
    };

    recycles.push(newrecycle);

    // Opdaterer grid med det nye objekt
    document.querySelector("#grid-teachers").innerHTML = "";

    // call appendTeachers to append all teachers again
    appendRecycles(recycles);
}

// Tilføj nyt billede til DOM

//Variabel til default billede kaldes

let selectedimage = "" ;

// Funktion til at kalde et defualtbillede til feedet

function previewFile() {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        console.log(reader.result)
        selectedimage=reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        console.log(reader);
    }
}

//  Gemte - saved - appendes til DOM

let saved = [{
    img:"https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/29244014_1002610289896626_3213809700274496725_n.jpg?_nc_cat=103&_nc_ht=scontent-amt2-1.xx&oh=ff6fc4954095c1b00e9ed361230ed7e5&oe=5CE579EE",
    beskrivelse2:"Chaiselong sort"
  }
];

console.log(saved);

// Funktion appendes til DOM via innerHTML

function appendSaved(saved) {
    for (let save of saved) {
        console.log(save);
        document.querySelector("#grid-saved").innerHTML +=
            
    `<article id="savedart">
        <img id="savedimg" src='${save.img}'>
        <h3 id="savedh3">${save.beskrivelse2}</h3>
    </article>`;
    }
}

// Appendes til DOM

appendSaved(saved);

/* ----- MODALS - alle popups defineres og kaldes ----- */

// Skaber variabler for alle MODALS (popups)

var modal1 = document.getElementById('modal-1');

var modal2 = document.getElementById('modal-2');

var modal3 = document.getElementById('modal-3');

var modal4 = document.getElementById('modal-4');

var modal5 = document.getElementById('modal-5');

var modal6 = document.getElementById('modal-6');

// Skaber variabler for alle btns

var tilføjbtn = document.getElementById("navbotplus");

var filterbtn = document.getElementById("filterbtn");

var profilbtn = document.getElementById("btnprofil");

var gemtbtn = document.getElementById("btngemt");

var notbtn = document.getElementById("btnnot");

var prodbtn = document.getElementById("productpopup");

// BTN click-funktion

tilføjbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal1.style.display = "block";
}

filterbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal2.style.display = "block";
}

profilbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal3.style.display = "block";
}

gemtbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal4.style.display = "block";
}

notbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal5.style.display = "block";
}

prodbtn.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    modal6.style.display = "block";
}

// Luk ned når der klikkes uden for modals

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}

// ----- SPANS (x) på alle popups -----

// SPAN (x) TILFØJ

// Get the span
var spantilfoj = document.getElementsByClassName("close")[0];

// Luk modal med (x) (span)
spantilfoj.onclick = function () {
    modal1.style.display = "none";
}

// SPAN (x) FILTER

// Get the span
var spanfilter = document.getElementsByClassName("closefilter")[0];

// Luk modal med (x) (span)
spanfilter.onclick = function () {
    modal2.style.display = "none";
}

// SPAN (x) Profil

// Get the span
var spanprofil = document.getElementsByClassName("closeprofil")[0];

// Luk modal med (x) (span)
spanprofil.onclick = function () {
    modal3.style.display = "none";
}

// SPAN (x) Gemt

// Get the span
var spansaved = document.getElementsByClassName("closesaved")[0];

// Luk modal med (x) (span)
spansaved.onclick = function () {
    modal4.style.display = "none";
}

// SPAN (x) Profil

// Get the span
var spannotifikation = document.getElementsByClassName("closenotifikation")[0];

// Luk modal med (x) (span)
spannotifikation.onclick = function () {
    modal5.style.display = "none";
}

// SPAN (x) Product

// Get the span
var spanproduct = document.getElementsByClassName("closeproduct")[0];

// Luk modal med (x) (span)
spanproduct.onclick = function () {
    modal6.style.display = "none";
}

// MAPS API - får kortet frem, med produktets adresse

function initMap() {

    // Options - længde og breddegrader (statisk på ét objekt)

    var options = {
        zoom: 12,
        center: {
            lat: 56.1577273,
            lng: 10.2049758
        }
    }

    // Nyt kort

    var map = new google.maps.Map(document.getElementById('map'), options);

    //Marker på kort

    var marker = new google.maps.Marker({
        position: {
            lat: 56.1577273,
            lng: 10.2049758
        },
        map: map
    })

}
