export function capitalise(word) {
  let capitalisedWord = word[0].toUpperCase() + word.slice(1);
  return capitalisedWord;
}

export function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

export let calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

export function caesarCipher(string, shiftFactor) {
  let encodedString = "";
  for (let i = 0; i < string.length; i++) {
    if (/^[A-Za-z]*$/.test(string[i])) {
      // tests if letter is alphabet
      let charCode = string[i].charCodeAt(0);

      if (string[i] === string[i].toUpperCase()) {
        // if letter is uppercase
        charCode += shiftFactor - 65;
        charCode = charCode % 26;
        charCode = String.fromCharCode(charCode + 65);
      } else {
        // if letter is lowercase
        charCode += shiftFactor - 97;
        charCode = charCode % 26;
        charCode = String.fromCharCode(charCode + 97);
      }

      encodedString += charCode;
    } else {
      encodedString += string[i];
    }
  }
  return encodedString;
}

export function analyzeArray(arr) {
  let min = arr[0];
  let max = arr[0];
  let total = 0;
  for (let item of arr) {
    if (item > max) max = item;
    if (item < min) min = item;
    total += item;
  }
  let length = arr.length;
  let average = total / length;

  return { average, min, max, length };
}
