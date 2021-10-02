"use strict ";

//Arrow function
const a = b => 100 - b;
const c = a(50);
console.log(c);

//example-0

const orangeCapholder = (playerName, runScoredbyteam) => {
    const runsScoredbyplayer = runScoredbyteam - 590;
    //return statement
    return `The orangecap holder name is ${playerName} and he scored ${runsScoredbyplayer} runs`;
}

console.log(orangeCapholder("Virat Kohli", 1500));