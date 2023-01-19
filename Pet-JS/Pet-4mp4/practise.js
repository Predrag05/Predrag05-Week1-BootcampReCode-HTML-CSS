let x;
x = 5;
console.log(x);

let y = 7;
{
    let y = 6;
    console.log(y);

}
console.log(y);

{
    const msg = "Zdravo";
    console.log(msg,"Pero");
    // msg = "Dobro jutro"; Ово је грешка која је била у задатку да је пронађемо.
    console.log(msg)
}

{
    // console.log(Pera, 5) грешка, ReferenceError: Pera is not defined

}

{
    // var u = 10
    let u = 10
    {
        console.log(u) // исписаће 10 у оба случаја, јер се враћа ка већем Скоупу односно блок кода
    }
}

{
    {
        let x = 9
        {
            {
                {
                    {
                        let x = 432;
                    }
                }
                console.log(x) // x ће бити 5 јер иде ка већим блоковима кода а не иде никако ка мањим.
            }
        }

    }
}
// Други случај са var
// { let h = 99
//     {
//         {
//             { var h = 50 // var - пролази кроз цео код и заузима коцкицу за себе са тим именом h а не смеју да постоје било која два са истом декларацијом
//                 {
//                     {
//                         { consol.log(h)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }