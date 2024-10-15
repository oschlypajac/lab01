const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //TODO zad 1
        //losowanie imienia z bilioteki imion
        content += `"${names[~~((Math.random() * names.length) / 1)]}",`; 
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});