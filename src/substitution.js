
const substitutionModule = (function () {

  
  function substitution(input, alphabet, encode = true) {
    const standard = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();

    if (!alphabet) return false;
    alphabet = alphabet.toLowerCase();
    if (alphabet.length !== 26) return false;

    function characterCheck(alphabet) {
      const newAlphabet = alphabet.split("");
      const hasDuplicate = newAlphabet.some((char, index) => {
        return newAlphabet.indexOf(char) !== index;
      });
      return hasDuplicate;
    }

    if (characterCheck(alphabet)) {
      return false; // Checks for duplicate characters in the alphabet
    }

    let newMessage = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let index = standard.indexOf(char);
        if (!standard.includes(char)) {
          newMessage += char;
        } else {
          newMessage += alphabet[index];
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let index = alphabet.indexOf(char);
        if (index === -1) {
          newMessage += char;
        } else {
          newMessage += standard[index];
        }
      }
    }

    return newMessage;
  }

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };