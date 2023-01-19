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

let y

console.log(a)

{
    var a = "hello"
    console.log(a)
}
