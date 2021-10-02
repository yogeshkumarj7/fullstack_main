function logger() {
    console.log("hii welcome to know me")
}

logger(); //we called function here 

function myInfo(age, date) {
    let myself =(`my name is yogesh.I am ${ age } years old.Today's date is ${date}`)
    return myself;

}
let information = myInfo(20, 2); //we called function here
console.log(information)