// MOZE DA SE UDJE U NODE!!!
// DOLE U TERMINALU SE SAMO KUCA KOMANDA NODE PA ENTER!!!
// IZLAZI SE IZ NODE-A CTRL+C DVA PUTA!!!
// IZLAZI SE TAKODJE NA CTRL + D!!!
// IZLAZAK IZ NODE TAKODJE I KOMANDNOM .exit
// sve je case sensitive

// string je jaci tako da string sa brojem ostaje string samo se doda rec

// u NODE-u dole u terminalu ako zelimo da pretvorimo string u broj onda kucamo npr. 5 + Number("423")
// i onda ce NODE sabrati i bice 428

//ovo dole u terminalu u Node-u sluzi da bi smo proverili kod koji gore posle zelimo da kucamo
//i Node moze da nam kaze da li bi ta kombinacija bila dobra ili ne, greska ili undefined...

let x
x = 5
const p = 9

console.log(x,p,x+p);
console.log(x,p,x*p);

// Kada se naredjuje komandom Number("423") - to se zove - Eksplicitna konverzija
// Ako se forsira eksplicitnom konverzijom Number("6asdgsda87")
// ovo gore u Nodeu daje NaN - not a number
// "42" - 3     - Implicitna konverzija, broj u string-u radi bez naredbe za - * /
// dakle kada sam uradi i prebaci u broj iz stringa to je IMPLICITNA KONVERZIJA
// a kada moramo da mu naredimo sta da uradi sa npr. Number("432") to je EKSPLICITNA KONVERZIJA