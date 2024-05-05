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

//zad4

// const zad4 = (clickedBtn) => {
//     document.querySelectorAll('.z4-btn').forEach((btn)) => {
//         btn.classList.add('active')
//     }}
//     clickedBtn.classList.add('active')
// }

//zad5 






//zad 6 