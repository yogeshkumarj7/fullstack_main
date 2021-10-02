//Function Declaration or decoration
function urAge(urStudyingyr){
    return 5+urStudyingyr;
}
const myAge=urAge(15);// u can declare this before fun also
console.log(myAge)


//function expression
const Age=function urAge1(urStudyingyr){
    return 5+urStudyingyr;
}

const myAge1=Age(15);//but here we can't initialize this before expression
console.log(myAge1)
//expression produces values directly