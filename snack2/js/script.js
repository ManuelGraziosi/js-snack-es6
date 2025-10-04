const rootElemHandler = document.getElementById("root");

/** *************** SNACK 2 *************** */
// Main Code
const footballTeams = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Bologna", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Sassuolo", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Genoa", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Cagliari", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Udinese", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Empoli", puntiFatti: 0, falliSubiti: 0 }
];

console.log(footballTeams);
applyRandomValue(footballTeams);
console.log(footballTeams);

const compressedTeams = [];
for (i = 0; i < footballTeams.length; i++) {
  const curTeam = footballTeams[i];
  // console.log("curTeam", curTeam);

  const newDataTeam = {};
  for (let key in curTeam) {
    if (key !== "puntiFatti") {
      newDataTeam[key] = curTeam[key];
    }
  }
  // console.log("newDataTeam", newDataTeam);
  compressedTeams.push(newDataTeam);
}
console.log("compressedTeams", compressedTeams);

// Function Definition
/**
 * Description: Void Function that apply random value to the array element. 
 * @param {Array} arrayTeam
 * 
 */

function applyRandomValue(arrayTeam) {
  arrayTeam.forEach(element => {
    element.puntiFatti = randomNumber(0, 100);
    element.falliSubiti = randomNumber(2, 50);
  });
}

/**
 * Description: function that generate random value between a range min,max
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** *************** /SNACK 2 *************** */