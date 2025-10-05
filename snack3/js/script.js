const rootElemHandler = document.getElementById("root");

/** *************** SNACK 3 *************** */
// Main Code
const biciclette = [
    { nome: "Mountain Bike", peso: 14 },
    { nome: "Bici da Corsa", peso: 7 },
    { nome: "Bici da Città", peso: 12 },
    { nome: "Bici Elettrica", peso: 22 },
    { nome: "Bici Pieghevole", peso: 11 },
    { nome: "BMX", peso: 10 },
    { nome: "Gravel Bike", peso: 9 },
    { nome: "Fat Bike", peso: 16 },
    { nome: "Tandem", peso: 20 },
    { nome: "Cruiser", peso: 13 }
];
console.log(JSON.parse(JSON.stringify(biciclette)));
findSubArray(biciclette, 2, 4);
// Function definition
/**
 * Description: function return a subarray of element who index is included in the range [inputLowerIndex, inputHigherIndex]
 * Note: need to add input index controll (wip)
 * @param {Array} inputArray 
 * @param {Number} inputLowerIndex 
 * @param {Number} inputHigherIndex 
 * @returns {Array}
 */
function findSubArray(inputArray, inputLowerIndex, inputHigherIndex) {
    const resultArray = [];
    for (let i = inputLowerIndex; i <= inputHigherIndex; i++) {
        console.log(`----Iterazione N:${i}----`);
        const curElem = inputArray[i];
        console.log("curElem", curElem);
        resultArray.push(curElem);
    }
    console.log("resultArray", resultArray);
    return resultArray;
}

/** *************** /SNACK3 *************** */
