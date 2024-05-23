// // //1

// // let liczby = [];
// // for(let i=0; i<10; i++) {
// //     let liczba = prompt("Podaj liczbę całkowitą:");
// //     liczby.push(parseInt(liczba));
// // }

// // console.log("Wpisane liczby to: ", liczby);

// // let szukanaLiczba = prompt("Podaj liczbę, której szukasz:");
// // let licznik = 0;

// // for(let i=0; i<liczby.length; i++) {
// //     if(liczby[i] == szukanaLiczba) {
// //         licznik++;
// //     }
// // }

// // console.log("Liczba " + szukanaLiczba + " występuje " + licznik + " razy w tablicy.");

// //2

// let liczby_2 = [1, 2, 3, 4, 5, 6];
// console.log("Początkowa tablica: ", liczby_2);

// let nowaLiczba = prompt("Podaj liczbę, którą chcesz wstawić:");
// let indeks = prompt("Podaj indeks, na którym chcesz wstawić liczbę:");

// liczby_2.splice(indeks, 0, parseInt(nowaLiczba));

// console.log("Tablica po wstawieniu nowej liczby: ", liczby_2);


// //3

// let ciag = prompt("Podaj ciąg, który chcesz odwrócić:");
// let odwroconyCiag = ciag.split('').reverse().join('');

// console.log("Odwrocony ciąg: ", odwroconyCiag);


// //4
function wypelnijTabliceLosowymiLiczbami(rozmiar) {
    let tablica = [];
    for (let i = 0; i < rozmiar; i++) {
        tablica.push(Math.floor(Math.random() * 100));
    }
    return tablica;
}

function wypiszLiczby() {
    let liczby = wypelnijTabliceLosowymiLiczbami(10);
    document.getElementById("liczby").innerText = liczby.join(", ");
}

//ZAD 5
let tablica = [12, 45, 23, 78, 56, 89, 34, 67, 29, 100];

// a. zsumuj wartości
let suma = tablica.reduce((acc, val) => acc + val, 0);
console.log("Suma wartości:", suma);

// b. znajdź liczby parzyste
let parzyste = tablica.filter(num => num % 2 === 0);
console.log("Liczby parzyste:", parzyste);

// c. pomnóż wartości razy 3
let pomnozone = tablica.map(num => num * 3);
console.log("Pomnożone wartości razy 3:", pomnozone);

// d. dodaj do tablicy swój numer albumu. Znajdź jego index w tablicy
let numerAlbumu = 69781;
tablica.push(numerAlbumu);
let indexNumeruAlbumu = tablica.indexOf(numerAlbumu);
console.log("Index numeru albumu:", indexNumeruAlbumu);

// e. oblicz średnią arytmetyczną
let srednia = suma / tablica.length;
console.log("Średnia arytmetyczna:", srednia);

// f. znajdź największą liczbę
let najwieksza = Math.max(...tablica);
console.log("Największa liczba:", najwieksza);

// g. zlicz ilość wystąpień wybranej wartości
let wybranaWartosc = 23;
let iloscWystapien = tablica.filter(num => num === wybranaWartosc).length;
console.log("Ilość wystąpień wybranej wartości:", iloscWystapien);



//ZAD 6

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function wypiszFibonacciego() {
    let fibonaccis = fibonacci(100);
    document.getElementById("fibonacci").innerText = fibonaccis.join(", ");
}
// ZAD 7


function sumaDwochNajwiekszych(tablica) {
    let [pierwszy, drugi] = tablica.sort((a, b) => b - a);
    return pierwszy + drugi;
}

let liczby = [12, 45, 23, 78, 56, 89, 34, 67, 29, 100];
console.log("Suma dwóch największych liczb:", sumaDwochNajwiekszych(liczby));
//ZAD8
function usunDuplikaty(tablica) {
    return [...new Set(tablica)];
}

let duplikaty = [12, 45, 23, 78, 56, 45, 89, 34, 23, 100];
console.log("Tablica bez duplikatów:", usunDuplikaty(duplikaty));


//ZAD9

function czyLiczbaPierwsza(liczba) {
    if (liczba <= 1) return false;
    for (let i = 2; i <= Math.sqrt(liczba); i++) {
        if (liczba % i === 0) return false;
    }
    return true;
}

let liczba = 29;
console.log(`Czy liczba ${liczba} jest pierwsza?`, czyLiczbaPierwsza(liczba));

//ZAD 10

function odwrocKolejnoscSlow(zdanie) {
    return zdanie.split(" ").reverse().join(" ");
}

let zdanie = "Ala ma kota";
console.log("Odwrócona kolejność słów:", odwrocKolejnoscSlow(zdanie));

//ZAD11

function generujLosoweHaslo(dlugosc) {
    const znaki = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let haslo = '';
    for (let i = 0; i < dlugosc; i++) {
        haslo += znaki.charAt(Math.floor(Math.random() * znaki.length));
    }
    return haslo;
}

let dlugoscHasla = 10;
console.log("Losowe hasło:", generujLosoweHaslo(dlugoscHasla));