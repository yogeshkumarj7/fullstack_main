// //for loop

// for(let p=1;p<10;p++){
//     console.log(`p with id ${p}`)
// }


// //for loop

// q=1;
// while(q<10){
//     console.log(`q with id ${q}`)
//     q++;
// }

// ..................................................
let diceValue=Math.trunc(Math.random()*6)+1;
// console.log(diceValue)

while(diceValue!==6){
    console.log(`rolled no is ${diceValue}`)
    diceValue=Math.trunc(Math.random()*6)+1;
    if(diceValue==6){
        console.log(`loop is going to end`)
    }
}

