const statesData = require('./states.json');

function checkCapital(state, capital) {
  for (let i = 0; i < statesData.length; i++) {
    if (statesData[i].State === state && statesData[i].Capital === capital) {
      return true; // la capitale est correcte
    }
  }
  return false; // la capitale est incorrecte
}


// Exemple d'utilisation de la fonction
const result = checkCapital('New York', 'Albany');
console.log(result); // Affiche true

const result2 = checkCapital('New York', 'New York City');
console.log(result2); // Affiche false