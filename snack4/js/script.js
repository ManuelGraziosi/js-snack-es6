const rootElemHandler = document.getElementById("root");

const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];
// const array2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
/** *************** SNACK 4 *************** */
// Main Code
console.log("Snack4");
const mergeTestV1 = mergeTwoArrayV1(array1, array2);
console.log("mergeTestV1", mergeTestV1);

const mergeTestV2 = mergeTwoArrayV2(array1, array2);
console.log("mergeTestV2", mergeTestV2);

const mergeTestV3A = mergeTwoArrayV3(array1, array2);
console.log("mergeTestV3A", mergeTestV3A);

const mergeTestV3B = mergeTwoArrayV3(array2, array1);
console.log("mergeTestV3B", mergeTestV3B);

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

// Function Definition
/**
 * Descrition: funcion return a new array that marge two array reading alternatively value from the array
 * aka V2 but without array's method
 * @param {Array} inputArray1 
 * @param {Array} inputArray2 
 * @returns {Array}
 */
function mergeTwoArrayV3(inputArray1, inputArray2) {
    const resultArray = [];
    for (let i = 0; i < Math.min(inputArray1.length, inputArray2.length); i++) {
        const curElemArray1 = inputArray1[i];
        const curElemArray2 = inputArray2[i];
        resultArray.push(curElemArray1)
        resultArray.push(curElemArray2)
    }

    if (inputArray1.length < inputArray2.length) {
        for (let i = inputArray1.length; i < inputArray2.length; i++) {
            const residualArrayCurElem = inputArray2[i];
            resultArray.push(residualArrayCurElem);
        }
    } else if (inputArray1.length > inputArray2.length) {
        for (let i = inputArray2.length; i < inputArray1.length; i++) {
            const residualArrayCurElem = inputArray1[i];
            resultArray.push(residualArrayCurElem);
        }
    }
    return resultArray;
}


/** *************** /SNACK 4 *************** */
