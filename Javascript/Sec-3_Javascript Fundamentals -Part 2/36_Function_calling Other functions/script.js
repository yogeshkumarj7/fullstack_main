//here we called one function from anathor function
function cut(fruitCut){
    return fruitCut*2;
}
function fruitSlices(orange, mango) {
    const orgPieces=cut(orange)
    const mangoPieces=cut(mango)
    console.log(orange,mango);
    const juce = `make the juce with ${orgPieces} slices of oranges and ${mangoPieces} slices of mango`
    return juce;
}

console.log(fruitSlices(5,10));