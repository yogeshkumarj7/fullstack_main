//decleared scores
const cskFirstmatch_Score=96;
const cskSecondtmatch_Score=108;
const cskThirdtmatch_Score=150;
const miFirstmatch_Score=88;
const miSecondtmatch_Score=91;
const miThirdtmatch_Score=110;

//their avg's
const cskAvg_score= (cskFirstmatch_Score + cskSecondtmatch_Score + cskThirdtmatch_Score)/3 ;
const miAvg_score= (miFirstmatch_Score + miSecondtmatch_Score + miThirdtmatch_Score)/3 ;
console.log(cskAvg_score,miAvg_score)

//level-1
// if(cskAvg_score>miAvg_score){
//     console.log(`Csk wins!`)
// }else if(cskAvg_score<miAvg_score){
//     console.log(`Mi wins!`)
// }else if(cskAvg_score===miAvg_score){
//     console.log(`Match draw due to equal points`)
// }else{
//     console.log(`no-result`)
// }

//level-2

if(cskAvg_score>miAvg_score && cskAvg_score>=100){
    console.log(`csk wins`)
}else if(miAvg_score>cskAvg_score && miAvg_score>=100){
    console.log(`mi wins`);

}
else if(cskAvg_score===miAvg_score && cskAvg_score>=100 && miAvg_score>=100){
    console.log(`both teams wins`)
}else{
    console.log(`no result`)
}