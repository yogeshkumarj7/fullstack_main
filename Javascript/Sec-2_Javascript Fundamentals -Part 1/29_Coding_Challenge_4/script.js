const bill=275;
const tip=bill<=300 && bill>=50 ? bill *0.15:bill*0.2;
const totalValue=bill+tip;
console.log(bill,tip,totalValue);
