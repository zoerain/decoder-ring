const polybiusModule = (function () {

  
  function polybius(input, encode = true) {
    const grid = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: ["(i/j)"],
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    const values = Object.values(grid);
    const keys = Object.keys(grid);

    input = input.toLowerCase(); //ignores capitols

    let newMessage = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter === " ") {
          newMessage += " ";
        } else if (letter === "i" || letter === "j") {
          newMessage += "42";
        } else {
          for (const key in grid) {
            if (grid[key] === letter) {
              newMessage += key;
            }
          }
        }
      }
    }
    if (!encode) {
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          count++;
        }
      }
      if (count % 2 === 1) {
        return false;
      }
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter === " ") {
          newMessage += " ";
        } else {
          let pair = input[i] + input[i + 1];
          const index = keys.indexOf(pair);
          newMessage += values[index];
          i++;
        }
      }
    }
    return newMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
