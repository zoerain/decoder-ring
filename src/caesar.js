const caesarModule = (function () {

  
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false; //should return false if shift value doesn't meet requirements

    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    input = input.toLowerCase(); //make sure the function ignores capitols
    let inputArr = input.split("");
    let newMessage = "";

    const direction = encode ? 1 : -1;

    for (let i = 0; i < inputArr.length; i++) {
      let letter = inputArr[i];
      if (alphabet.includes(letter)) {
        let newIndex = (alphabet.indexOf(letter) + shift * direction + 26) % 26; //finds new index
        let newLetter = alphabet[newIndex];

        newMessage += alphabet[newIndex];
      } else {
        newMessage += letter;
      }
    }
    return newMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
