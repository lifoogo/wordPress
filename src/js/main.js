// var x = 1;
// console.log("Создайте цикл while, который будет выводить в консоль все нечётные числа от 1 до 30");
// while(x <= 30){
//     console.log(x);
//     x+=2;
// }




// console.log("Создайте цикл while, который будет выводить в консоль все числа в диапазоне от 1 до 30, кратные 5. Небольшая подсказка - это можно проделать при помощи проверки равенства нулю остатка результата деления на 5.");

// var countTwo = 1;
// while(countTwo <= 30){
//     if(countTwo % 5 === 0){
//         console.log(countTwo);
//     }
//     countTwo++;
// }


// console.log("Создайте цикл while, который будет выводить в консоль все чётные числа от 1 до 30, но в обратном порядке, то есть 30, 28, 26, ..., 2.");

// var count = 30
// while(count > 0){
//     console.log(count);
//     count-=2;
// }


// ________________________________________________________________________________________________

// for(count = 2; count <= 30; count += 2){
//     console.log(count);
// }

// console.log("Создайте цикл for, который будет выводить в консоль все числа в диапазоне от 1 до 30, кратные 7. Небольшая подсказка - это можно проделать при помощи проверки равенства нулю остатка результата деления на 7")

// for(count = 7; count <= 30; count++){
//     if(count % 7 == 0){
//         console.log(count);
//     }
// }

// console.log("Создайте цикл for, который будет выводить в консоль все нечётные числа от 1 до 30, но в обратном порядке, то есть 29, 27, 25, ..., 1.")


// for(count = 30; count >= 0; count -= 3){
//     console.log(count)
// }

// ------------------------------------------------------------------------------------------------------------

// function isNumberOdd(number){
//     if(number % 2 !== 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isNumberOdd(4));




// function factorial(number){
//     var res = 1;
//     for( i = 1; i <= number; i++){
//         res = res * i;
//     }
//     return res;
// }
 
// console.log(factorial(5));



// function changeSpaceToUnderscore(text){
//     var mystr = text.replace(/ /g, "_");
//     return mystr;
// }

// x = changeSpaceToUnderscore("hello javaScript");

// console.log(x)
// Производитель модель год выпуска цвет и продал ли он или нет false and true вывести в консоль все авто что не проданы
// ________________________________________________________________________________________________________________________

var car = [
    {
        manufacturer: "Toyota",
        model: "Camry",
        year: 2010,
        color: "blue",
        sale: false
    },
    {
        manufacturer: "Mercedes-Benz",
        model: "E 230",
        year: 1990,
        color: "white",
        sale: true
    },
    {
        manufacturer: "Kia",
        model: "Kia Cerato",
        year: 2020,
        color: "black Metal",
        sale: true
    }
]

// // console.log(car[0].sale);

for(i = 0;i < car.length; i++){
    if(car[i].sale === false){
        console.log(car[i].model + " Эта машина продана");
    }else{
        console.log(car[i].model + " Эта машина сейчас продается");
    }
}




