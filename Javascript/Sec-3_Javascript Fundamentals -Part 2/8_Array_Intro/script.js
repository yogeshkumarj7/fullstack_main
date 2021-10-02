const favCricketers=["ab Devilliars","Virat","Rohit","Mahi"];//method--2

const num=new Array(10,11,12,13,14,15);//method--2

console.log(favCricketers.length)
console.log(favCricketers[3])
console.log(favCricketers[favCricketers.length-2])
console.log(favCricketers)

favCricketers[1]="Maxwell" //replaced virat
console.log(favCricketers)

const specialArray=[favCricketers,num[2]+num[3],]
console.log(specialArray)


//Exercise
const fun=function(num){
    return 100-num;
}
const values=[fun(num[0]),fun(num[1]),fun(num[3])];
console.log(values)