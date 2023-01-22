// console.log() ispisuje citajuci odozgo na dole i s leva na desno sve sta je napisano iymedju zagrada ()
// a console.log() tako funkcionise da uvek u nodeu ispisuje ispod
// tako da ce ovaj kod ispod ispisati sve jedno ispod drugog u nodeu
// zarez ili tacka-zarez su obavezni iza svakog koda ili cak unutar same zagrade ili je inace greska
// console.log("Hello world!"); console.log(5*31); console.log(5/31); console.log(5-31); console.log(5+31);
// ali ovaj kod gore se nikad ovako ne pise vec normalno jedno ispod drugog kao ovo ispod

console.log("Hello world!");
console.log(5*31);
console.log(5/31);
console.log(5-31);
console.log(5+31);

// Promenljive
var x; // Deklaracija promenljive x
x = 5; // Definicija promenljive x
let y = 6; // Deklaracija i definicija promenljive y
const z = 7; // Deklaracija konstantne i nepromenljive z
// Constanti const ne moze da se menja vrednost kasnije jer ce pokazati gresku
console.log(x,y,z);
// = jednako je OPERATOR DODELE, dakle kao reci DAJE VREDNOST ILI KOJE JE VREDNOSTI

let a = x + y;
// sta god da je bilo pre X odnosno vrednost za X on u toj napravljenoj kockici ya X brise i upisuje novu vrednost koja je definisana znakom =

x = 10;

console.log(a,x);
// dakle u nodeu ce prvo ispisati gornj console.log(x,y,z) gde je vrednost x 5, a u donjem console.log(a,x) a onda a prvo 11 sa prethodnim IKSOM 5 a onda posle ce da ispise da je vrednost X 10

// Ako je X bilo deklarisano kao broj x=5 u javaskriptu x moze da bude deklarisan kasnije kao string 'dsdfsdf'

// TIPOVI PODATAKA
// Number, String, Boolean (true/false)

console.log("sad" + "posle"); // sabiranje stringova moze - kao da se povezu dve reci, a ostale kombinacije uglavnom ne mogu - * / ne mogu u mixu stringa i numbera
console.log("sad" + "5")// String ce javaskript pokusati da pretvori u broj ako mu je zadata matematicka operacija
console.log(35 - "5") // + ce samo da doda ipak 5 kao string ali ostale opcije * - / ce ipak pokusati da izracuna


let t; // moze - posle da joj se doda vrednost u nekom momentu posle kao i za var
t = 8;
console.log(t);

//postoji greska u videu
// const x
// x = 4
// 1.Nedelja - Pet-2.mp4 - 30:11
