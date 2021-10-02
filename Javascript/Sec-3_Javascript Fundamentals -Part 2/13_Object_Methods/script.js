const mySelf={
    myName:"Yogi",
    myAge:20,
    myFavcricketers:["AB Devilliars","Virat","Mahi"],
    hasAsister:false,

    quickSummary:function(){
        return `My name is ${this.myName} and i am ${this.myAge} years old,i have ${this.hasAsister ? "a" :"no"} sister`
    },
    findBirthyr: function() 
    {
    console.log(this);  //it shows whole obj
    return 1981+this.myAge;    
    }

};

console.log(mySelf.findBirthyr());

 console.log(mySelf.quickSummary());