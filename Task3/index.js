"use strict";
function nextLetter(str) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzA";
  var ret = new Array();
  for (var x = 0; x < str.length; x++) {
    for (var i = 0; i < alphabet.length; i++) {
      if (characterCheck(alphabet, str[x]) == false) {
        ret[x] = str[x].toString();
      }
      if (str[x] == alphabet[i]) {
        if (alphabet[i] == "Z") {
          ret[x] = "A";
        } else {
          ret[x] = alphabet[i + 1];
        }
      }
    }
  }
  var output = ret.join("");
  output = vowelsUp(output);
  return output;
}
function characterCheck(motherString, char) {
  for (var i = 0; i < motherString.length; i++) {
    if (motherString[i] == char.toString()) {
      return true;
    }
  }
  return false;
}
function vowelsUp(str) {
  var str;
  var res = str.split("");
  for (var i = 0; i < res.length; i++) {
    if (
      res[i] == "A" ||
      res[i] == "E" ||
      res[i] == "I" ||
      res[i] == "O" ||
      res[i] == "U"
    ) {
      res[i] = res[i];
    } else if (
      res[i] == "a" ||
      res[i] == "e" ||
      res[i] == "i" ||
      res[i] == "o" ||
      res[i] == "u"
    ) {
      res[i] = res[i].toUpperCase();
    } else {
      res[i] = res[i].toLowerCase();
    }
  }
  var out = res.join("");
  return out;
}
console.log("The word/sentence is: ");
console.log("Cat30");
console.log("After changing: ");
console.log(nextLetter("Cat30"));
