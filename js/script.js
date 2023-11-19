let nome = prompt('Inserisci il tuo nome');
console.log(nome);

let cognome = prompt('Inserisci il tuo cognome');
console.log(cognome);

let colore = prompt('Quale è il tuo colore preferito?');
console.log(colore);

let passwoard = nome + cognome + colore + '23';
console.log(passwoard);

document.getElementById('pass').innerHTML = passwoard;
console.log(passwoard);