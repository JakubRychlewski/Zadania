document.getElementById("Formularz").addEventListener("submit", function(event){
    event.preventDefault();
    let div = document.getElementById("Wyniki");
    var text = document.getElementById("text");
    div.innerHTML = '';
    div.appendChild(document.createTextNode("Są liczby?: "));
    if (/\d/.test(text.value.trim())) {
        div.appendChild(document.createTextNode("W tekscie występuje conajmniej jedna liczba"));
        div.appendChild(document.createElement("br"));
    } else {
        div.appendChild(document.createTextNode("W tekscie nie ma liczb"));
        div.appendChild(document.createElement("br"));
    }

    div.appendChild(document.createTextNode("Występowania litery a: "));
    let match = text.value.match(/a/g);
    if (match) {
        for (let i = 0; i < match.length; i++) {
            div.appendChild(document.createTextNode(match[i] + " "));
        }
    }
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createTextNode("Indexy liczb: "));
    let matchAll = [...text.value.matchAll(/\d+/g)];

    if (matchAll.length > 0) {
        for (let i = 0; i < matchAll.length; i++) {
            div.appendChild(document.createTextNode(matchAll[i].index + " "));
        }
        div.appendChild(document.createElement("br"));
    }

    let split = text.value.split(" ");
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createTextNode("Podzielone słowa splitem:"));
    div.appendChild(document.createElement("br"));
    for (let i = 0; i < split.length; i++) {
        let textNode = document.createTextNode(split[i]);
        div.appendChild(textNode);
        div.appendChild(document.createElement("br"));
    }

    div.appendChild(document.createTextNode("Pierwsze wystąpienie cyfry: "));
    let pierwys = text.value.match(/\d/);
    if (pierwys) {
        div.appendChild(document.createTextNode(pierwys[0]));
    } else {
        div.appendChild(document.createTextNode("Brak cyfr"));
    }
    div.appendChild(document.createElement("br"));

    div.appendChild(document.createTextNode("Tekst po zamianie cyfr na 'X': "));
    let replace = text.value.replace(/\d/g, 'X');
    div.appendChild(document.createTextNode(replace));
    div.appendChild(document.createElement("br"));

    div.appendChild(document.createTextNode("Pierwsze wystąpienie słowa 'kot': "));
    let search = text.value.search(/\bkot\b/);
    if (search !== -1) {
        div.appendChild(document.createTextNode("Słowo 'kot' znajduje się na pozycji: " + search));
    } else {
        div.appendChild(document.createTextNode("Brak słowa 'kot'"));
    }
    div.appendChild(document.createElement("br"));
});
