const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage())

const avgdolphins = calcAverage(44, 23, 71);
const avgkoalas = calcAverage(65, 54, 49);
console.log(avgdolphins, avgkoalas);

const checkWinner = function (scorek,scored) {
    if (scorek >= 2 * scored) {
        console.log(`koalas wins!`)
    } else if (scored >= 2 * scorek) {
        console.log(`dolphins wins!`)
    }else{
        console.log(`no result`)
    }
}
checkWinner(avgkoalas,avgdolphins);

checkWinner(100,500)