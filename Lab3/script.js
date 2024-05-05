// alert("Hello World"); // zadanie 2

// // zad 3

// let a =10;
// let b = 20;
// let c = 23.2;

// // a
// alert(a+b+c);
// // b
// console.log(a+b+c);
// //c3
// let wynik = a+b+c;
// document.getElementById("zad3").innerHTML="Wynik dodawania to: " + wynik;

// // zad 4

// for(let i = 0; i<101; i+=2){
//     //if(i%2==0){
//         console.log(i);
//     //}
// }

// // zad 5

// let a,b,c,p, pole;
// a = parseFloat(prompt("podaj długość boku a :"));
// b = parseFloat(prompt("podaj długość boku b : "));
// c = parseFloat(prompt("podaj długość boku c : "));

// if (a + b > c && a + c > b && b + c > a) {
//     alert("Mozesz zrobic trojkat z liczb : " + a +  " "+ b + " " + c); // Można utworzyć trójkąt
// } else {
//     alert("Niie mozesz zrobic trojkat z liczb : " + a +  " "+ b + " " + c);
// }
// console.log(a);

// p=(a+b+c)/2;
// console.log(p);
// console.log(p*(p-a)*(p-b)*(p-c));

// pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
// console.log(pole);


// //zad 6

// let imie;

// imie = prompt("Podaj swoje Imie");
// alert("Witaj! " + imie);


// // zad 7

// const liczba_a= parseInt(prompt("Podaj liczbe A: "));
// const liczba_b= parseInt(prompt("Podaj liczbe B: "));
// let wynik = liczba_a + liczba_b;

// document.getElementById("zad7").innerHTML ="Wynik dodwania liczb: " +liczba_a + " " + "i " + liczba_b + " " +"wynosi: "+  wynik;

// //zad 8 

// const number1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
// const number2 = parseFloat(prompt("Podaj drugą liczbę:"));
// const number3 = parseFloat(prompt("Podaj trzecią liczbę:"));

// const maxNumber = Math.max(number1, number2, number3);
// console.log("Największa liczba to:", maxNumber);

// document.getElementById('zad8').innerText = "Największa liczba z podanych to : " + maxNumber;

// zad 9 

// let liczba_1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
// let liczba_2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

// while (liczba_2 !== 0) {
//     let temp = liczba_2;
//     liczba_2 = liczba_1 % liczba_2;
//     liczba_1 = temp;
// }

// document.getElementById('zad9').innerText  = `Największy wspólny dzielnik podanych liczb to: ${liczba_1}`;
// //console.log(`Największy wspólny dzielnik podanych liczb to: ${liczba_1}`);


// //10
// function wyswietlAktualnyCzas() {
//     let teraz = new Date();
//     let elementCzasu = document.getElementById('czas');
//     elementCzasu.textContent = 'Aktualny czas: ' + teraz.toLocaleTimeString();
//   }

//   window.onload = function() {
//     wyswietlAktualnyCzas();
//     setInterval(wyswietlAktualnyCzas, 1000);
//   };

//   //11

//   let wylosowanaLiczba = Math.floor(Math.random() * 101);

//     let liczbaProb = 0;

//     function sprawdzPropozycje() {
//       let propozycja = parseInt(document.getElementById('propozycja').value);

//       // Sprawdź czy propozycja jest liczbą
//       if (isNaN(propozycja)) {
//         alert("Wprowadź liczbę!");
//         return;
//       }
//       liczbaProb++;
//       if (propozycja === wylosowanaLiczba) {
//         alert("Brawo! Zgadłeś liczbę " + wylosowanaLiczba + " w " + liczbaProb + " próbach!");
//         location.reload();
//       } else if (propozycja < wylosowanaLiczba) {
//         alert("Podana liczba jest mniejsza od szukanej!");
//       } else {
//         alert("Podana liczba jest większa od szukanej!");
//       }
//     }