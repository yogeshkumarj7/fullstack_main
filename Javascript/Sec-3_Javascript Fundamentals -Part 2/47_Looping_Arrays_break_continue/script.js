/* 
const myArray=[
    "YogeshKumar",
    "Jagtap",
    "Amazon",
    100-50,
    ["Rahul","Rohit","Virat"]
]

const newArray=[];

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i],typeof myArray[i])

    // newArray[i]=typeof myArray[i] ........way-1

    // newArray.push(typeof myArray[i]);......way-2
}
*/

/*
const currentYr=[1200,1300,1400,1500];
const logicalYr=[];

for(let i=0;i<currentYr.length;i++){
    logicalYr.push(2001-[currentYr[i]])
}

console.log(logicalYr)

*/

//continue and break

const numbers = [1, 2, "xyz", "pqr", 5, 6, 7, 8, 9, 10];
//Break
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]===numbers[3])break;
//     console.log(numbers[i])
// }  //here loop breaks from 4

//continue
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "string") continue;
  console.log(numbers[i]);
}
