const calcAge=function(birthyr){
    return 2021-birthyr;
}
const mainFun= function(birthyr,name){
    const age=calcAge(birthyr);
    const retAge=65-age
    if(retAge>0){
        console.log(`My name is ${name} and i need ${retAge} to retire`)
    }else{
        console.log(``)
    }
}
  