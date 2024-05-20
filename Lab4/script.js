//1a

for( let i=10; i>=0; i--){
    console.log(i)
}
console.log("Happy New Year!")
//1b
let odliczanie =10;
while (odliczanie>=0){
    console.log(odliczanie);
    odliczanie--;
}
console.log("Happy New Year!")

//2

function silnia(n){
    if(n==0 || n ==1){
        return 1;
    }else{
        return n * silnia(n-1);
    }
}
console.log(silnia(5));

function silnia_petla(n){
    let wynik =1;
    for(let i =1; i<=n;i++){
        wynik *=i;
    }
    return wynik;
}

console.log(silnia_petla(5));


//3

function weryfikacja(){
    let wiek =prompt("Podaj wiek: ");
    if(wiek<=18){
        window.open("https://www.gry.pl/gry/dzieci?page=1");
    }else {
        alert("mozesz wchodzic ;)))");
    }
}
weryfikacja();

// zad4

function changeColor(clickedButton) {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    clickedButton.classList.add('active');
}

//zad 5
function toggleVisibility() {
    const element = document.getElementById('toggleElement');
    element.classList.toggle('hidden');
}
//zad 6:

function addItem() {
    const textInput = document.getElementById('textInput');
    const itemList = document.getElementById('itemList');
    const newItemText = textInput.value;

    if (newItemText.trim() !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        textInput.value = "";
    } else {
        alert("Miałeś/aś coś wpisać ;) ");
    }
}

// zad 7 

function dodajDoTabeli() {
    const poleImie = document.getElementById('poleImie');
    const poleNazwisko = document.getElementById('poleNazwisko');
    const tabelaDane = document.getElementById('tabelaDane');

    const imie = poleImie.value.trim();
    const nazwisko = poleNazwisko.value.trim();

    if (imie !== "" && nazwisko !== "") {
        const nowyWiersz = document.createElement('tr');

        const komorkaImie = document.createElement('td');
        komorkaImie.textContent = imie;
        nowyWiersz.appendChild(komorkaImie);

        const komorkaNazwisko = document.createElement('td');
        komorkaNazwisko.textContent = nazwisko;
        nowyWiersz.appendChild(komorkaNazwisko);

        tabelaDane.appendChild(nowyWiersz);

        poleImie.value = "";
        poleNazwisko.value = "";
    } else {
        alert("Oba pola muszą być wypełnione!");
    }
}

// zad8 

function konwertujNaFahrenheita() {
    const poleCelsjusz = document.getElementById('poleCelsjusz');
    const wynikFahrenheita = document.getElementById('wynikFahrenheita');
    const stopnieCelsjusza = parseFloat(poleCelsjusz.value);

    if (!isNaN(stopnieCelsjusza)) {
        const stopnieFahrenheita = (stopnieCelsjusza * 9/5) + 32;
        wynikFahrenheita.textContent = `${stopnieCelsjusza}°C = ${stopnieFahrenheita.toFixed(2)}°F`;
    } else {
        wynikFahrenheita.textContent = 'Podaj poprawną wartość!';
    }
}
//zad 8 
function konwertujNaCelsjusza() {
    const poleFahrenheit = document.getElementById('poleFahrenheit');
    const wynikCelsjusza = document.getElementById('wynikCelsjusza');
    const stopnieFahrenheita = parseFloat(poleFahrenheit.value);

    if (!isNaN(stopnieFahrenheita)) {
        const stopnieCelsjusza = (stopnieFahrenheita - 32) * 5/9;
        wynikCelsjusza.textContent = `${stopnieFahrenheita}°F = ${stopnieCelsjusza.toFixed(2)}°C`;
    } else {
        wynikCelsjusza.textContent = 'Podaj poprawną wartość!';
    }
}
// zad 10
function pobierzWartosci() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    return { liczba1, liczba2 };
}

function dodaj() {
    const { liczba1, liczba2 } = pobierzWartosci();
    const wynik = liczba1 + liczba2;
    wyswietlWynik(wynik);
}

function odejmij() {
    const { liczba1, liczba2 } = pobierzWartosci();
    const wynik = liczba1 - liczba2;
    wyswietlWynik(wynik);
}

function pomnoz() {
    const { liczba1, liczba2 } = pobierzWartosci();
    const wynik = liczba1 * liczba2;
    wyswietlWynik(wynik);
}

function podziel() {
    const { liczba1, liczba2 } = pobierzWartosci();
    if (liczba2 !== 0) {
        const wynik = liczba1 / liczba2;
        wyswietlWynik(wynik);
    } else {
        wyswietlWynik('Nie można dzielić przez zero!');
    }
}

function poteguj() {
    const { liczba1, liczba2 } = pobierzWartosci();
    const wynik = Math.pow(liczba1, liczba2);
    wyswietlWynik(wynik);
}

function wyswietlWynik(wynik) {
    document.getElementById('wynik').textContent = `Wynik: ${wynik}`;
}
