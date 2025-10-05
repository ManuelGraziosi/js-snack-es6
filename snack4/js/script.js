const rootElemHandler = document.getElementById("root");

const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];
/** *************** SNACK 4 *************** */
// Main Code
console.log("Snack4");
const mergeTestV1 = mergeTwoArrayV1(array1, array2);
console.log("mergeTestV1", mergeTestV1);

const mergeTestV2 = mergeTwoArrayV2(array1, array2);
console.log("mergeTestV2", mergeTestV2);


// Function Definition
/**
 * Descrition: funcion return a new array that marge two array reading alternatively value from the array
 * @param {Array} inputArray1 
 * @param {Array} inputArray2 
 * @returns {Array}
 */
function mergeTwoArrayV1(inputArray1, inputArray2) {
    const resultArray = [];
    for (let i = 0; i < Math.max(inputArray1.length, inputArray2.length); i++) {
        const curElemArray1 = inputArray1[i];
        const curElemArray2 = inputArray2[i];
        if (curElemArray1) {
            resultArray.push(curElemArray1)
        }
        if (curElemArray2) {
            resultArray.push(curElemArray2)
        }
    }
    return resultArray;
}

// Function Definition
/**
 * Descrition: funcion return a new array that marge two array reading alternatively value from the array
 * Extra test that use some ready-to-use array function
 * @param {Array} inputArray1 
 * @param {Array} inputArray2 
 * @returns {Array}
 */
function mergeTwoArrayV2(inputArray1, inputArray2) {
    const resultArray = [];
    for (let i = 0; i < Math.min(inputArray1.length, inputArray2.length); i++) {
        const curElemArray1 = inputArray1[i];
        const curElemArray2 = inputArray2[i];
        resultArray.push(curElemArray1)
        resultArray.push(curElemArray2)
    }
    if (inputArray1.length < inputArray2.length) {
        const residualArray = inputArray2.slice(inputArray1.length);
        resultArray.push(residualArray);
    } else if (inputArray1.length > inputArray2.length) {
        const residualArray = inputArray1.slice(inputArray2.length);
        resultArray.push(...residualArray);
    }
    return resultArray;
}


/** *************** /SNACK 4 *************** */
