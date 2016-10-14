//Resetear comida
var comidas = "";
//Añair el 0 a la hora
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
//Calcular horas,minutos y segundos
//Se obitene la variable t que es el alimento del día
function hr() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var hora = h + ":" + m + ":" + s;

    if (h < 6) {
        t = "descanso";
    } else if (h < 9) {
        t = "desayuno";
    } else if (h < 11) {
        t = "almuerzo";
    } else if (h < 13) {
        t = "actividad";
    } else if (h < 17) {
        t = "comida";
    } else if (h < 20) {
        t = "refrigerio";
    } else if (h < 23) {
        t = "cena";
    } else {
        t = "descanso";
    };

};
//funcion para cargar xml
function loadDoc() {
    if (typeof xmlOp != 'undefined') {
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", xmlOp, false);
        xmlhttp.send();
        cargaComida(xmlhttp);

    } else {
        document.getElementById("titulo").innerHTML = "Debes personalizar tu plan"
        document.getElementById("reloj").innerHTML = "<a href='#' onclick='carga_pagina" + '("personaliza.html")' + "'>Personaliza ahora</a>"
    };
};

//Funcion relacionada que obtiene la lista de alimentos del xml
function cargaComida(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName(t)[0].getElementsByTagName("alimento");
    for (i = 0; i < x.length; i++) {
        comidas += "<li class='comida'>" +
            x[i].childNodes[0].nodeValue +
            "</li>";
    };
    var texto = "<p class='alim'>" + t + "</p><ul>" + comidas + "</ul>"
    document.getElementById("reloj").innerHTML = texto;

};

function MiPlan() {
    var Op = document.getElementById("miOpcion").value;
    xmlOp = "xml/" + "opcion" + Op + ".xml";
    descipcionPlan = "Escogiste el plan " + Op;
    document.getElementById("descPlan").innerHTML = descipcionPlan;
    loadDoc();
}

function listaCom() {
    hr();
    document.getElementById("listaCompras").innerHTML = "<li>" + t + "</li>";

};
