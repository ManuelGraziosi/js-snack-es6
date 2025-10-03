const rootElemHandler = document.getElementById("root");

/** *************** SNACK 1 *************** */
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

const biciclettaLeggera = findLighterBicycle(biciclette);
console.log("biciclettaLeggera", biciclettaLeggera);
rootElemHandler.innerHTML = `
    <div>
        <h2>Bici piu legera:</h2>
        <p>Nome: ${biciclettaLeggera.nome}</p>
        <p>Peso: ${biciclettaLeggera.peso}</p>
    </div>
`
// Function Definition
/**
 * Description: Function that finds the element of the array with the lowest weight. Returns the element
 * @param {Array} arrayBicycle
 * @returns {Object}
 */

function findLighterBicycle(arrayBicycle) {
    let lighterBicycle = arrayBicycle[0];
    for (let i = 1; i < arrayBicycle.length; i++) {
        const curBicycle = arrayBicycle[i];
        if (curBicycle.peso < lighterBicycle.peso) {
            lighterBicycle = curBicycle;
        }
    }
    return lighterBicycle
}

/** *************** /SNACK 1 *************** */
