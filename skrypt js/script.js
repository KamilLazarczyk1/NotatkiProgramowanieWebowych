let tekst = prompt('Wpisz tekst').toUpperCase();
let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let przesuniecie = 1; // -1 = brak przesunięcia, 0 = 1 przesuniecie, 1 = 2 przesuniecia...
let wynik = '';
for (let i = 0; i < tekst.length; i++) {
    console.log(parseInt(tekst[i]));
    if (!parseInt(tekst[i]) && tekst[i] != " ") {
        let temp, j = 0;
        while (tekst[i] != temp) {
            temp = alfabet[j];
            j += 1;
        }
        if (j >= 26 - przesuniecie) {
            j = j - 26;
        }
        wynik = wynik + String(alfabet[j + przesuniecie]);
    }
    else {
        wynik = wynik + String(tekst[i]);
    }
}
alert("Wynik = " + wynik);
