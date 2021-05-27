// check if a string can be generated from another string
// charcter is the string and document is generated from character;

function generateDocument(characters, document) {
  // Write your code here.
  charHashTable = {};
  if (characters.length < document.length) {
    return false;
  }
  for (let i = 0; i < characters.length; i++) {
    if (charHashTable[characters[i]]) {
      charHashTable[characters[i]]++;
    } else {
      charHashTable[characters[i]] = 1;
    }
  }
  for(const char of document){
      if(!charHashTable[char] || charHashTable[char] === 0) return false;
      charHashTable[char]--;
  }
  return true;
}
characters = "Bste!hetsi ogEAxpelrt x ";
document = "AlgoExpert is the Best!d";
console.log(generateDocument(characters, document));
