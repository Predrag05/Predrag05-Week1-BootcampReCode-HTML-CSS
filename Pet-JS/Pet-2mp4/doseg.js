console.log(14)
// do sad smo pominjali u javaskriptu
// var x
// let x
// const x

//Doseg - Scope
// Doseg vidljivosti promene

var x // Vidi se u celom fajlu

// {
//     ovo zovemo bloko koda (ove viticaste zagrade)
// }

{
    let z = 5
    console.log(z)
}

// ovde gore daje konzol log i rezultat u nodeu je naravno 5

// {
//     let y = 5
// }

// console.log(y)

// ovde gore konzol log daje undefined


console.log(a)

{
    var a = "hello"
    console.log(a)
}

var x = 5
x = 3
console.log(x)

const y = 4
//y = 2 // const ne moze da se menja i da nije ovo u komentaru to bi bila greska

let z = 7
z = 4
console.log(z)

// Dakle promenio se var x i let z, i svakako je u conzole logu nov rezultat

{
    var x2 = 5
}
console.log(x2) // var se vidi i van Scopea, odnosno bloka koda, u kome je napravljen


// {
//     const y2 = 3
// }
// console.log(y2) // const se ne vidi van scope-a u kom je napravljen
//                 //ReferenceError: y2 is not defined

// {
//     let z2 = 3 // let se ne vidi van scope-a u kom je napravljen    
// }
// console.log(z2) //ReferenceError: z2 is not defined

