
document.getElementById("Formularz").addEventListener("submit", function(event){
event.preventDefault();
let div = document.getElementById("Wyniki");

div.innerHTML='';

if (/^[A-Z].*/.test(document.getElementById("Imie").value.trim())){
    div.appendChild(document.createTextNode("Imie Prawidłowe"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Imie Nieprawidłowe"));
    div.appendChild(document.createElement("br"));
}

if (/^[A-Z].*/.test(document.getElementById("Nazwisko").value.trim())){
    div.appendChild(document.createTextNode("Nazwisko Prawidłowe"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Nazwisko Nieprawidłowe"));
    div.appendChild(document.createElement("br"));
}

if (/^(1[8-9]|[2-9][0-9]|[1-9][0-9]{2,})$/.test(document.getElementById("Wiek").value.trim())){
    div.appendChild(document.createTextNode("Wiek Prawidłowy"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Wiek Nieprawidłowy"));
    div.appendChild(document.createElement("br"));
}

if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(document.getElementById("Email").value.trim())){
    div.appendChild(document.createTextNode("Email Prawidłowy"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Email Nieprawidłowy"));
    div.appendChild(document.createElement("br"));
}

if (/^[A-Z].*/.test(document.getElementById("Ulica").value.trim())){
    div.appendChild(document.createTextNode("Ulica Prawidłowa"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Ulica Nieprawidłowa"));
    div.appendChild(document.createElement("br"));
}

if (/^\d/.test(document.getElementById("Nrdom").value.trim())){
    div.appendChild(document.createTextNode("Numer Domu Prawidłowy"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Numer Domu Nieprawidłowy"));
    div.appendChild(document.createElement("br"));
}

if (/^\d{2}-\d{3}$/.test(document.getElementById("Kodpoczt").value.trim())){
    div.appendChild(document.createTextNode("Kod Pocztowy Prawidłowy"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Kod Pocztowy Nieprawidłowy"));
    div.appendChild(document.createElement("br"));
}

if (/^[A-Z].*/.test(document.getElementById("Miasto").value.trim())){
    div.appendChild(document.createTextNode("Miasto Prawidłowe"));
    div.appendChild(document.createElement("br"));
}else{
    div.appendChild(document.createTextNode("Miasto Nieprawidłowe"));
    div.appendChild(document.createElement("br"));
}});