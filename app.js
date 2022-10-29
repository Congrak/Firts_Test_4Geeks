const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  };