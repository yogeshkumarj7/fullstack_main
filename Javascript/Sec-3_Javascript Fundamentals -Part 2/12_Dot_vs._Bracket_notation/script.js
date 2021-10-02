
const indianCricketteam = {
    captainName: 'Virat Kohli',
    voiceCaptain: 'Rohit Sharma',
    headCoach: 'Ravi Shatri',
    iccTrophies: 3,
    trupcardPlayers: ["Bhuvi", "Shikhar", "Lord Shardul"]
}
// console.log(indianCricketteam.captainName);  //way--1
// console.log(indianCricketteam[`captainName`]);  //way--2

// const yj='Name';
// console.log(indianCricketteam[`captain`+yj])

// const inpInfo=prompt(`What u want to know about our cricket team from captain,voice captain & other stuff ?`)

// console.log(indianCricketteam.inpInfo);..........//not works here so we need to use bracket notation


if(indianCricketteam[inpInfo]){
    console.log(indianCricketteam[inpInfo])
}else{
    console.log(`sorry try agian!12`)
}

console.log(`indianCricket team having many best playeres out but i like ${indianCricketteam.trupcardPlayers[2]} most`)