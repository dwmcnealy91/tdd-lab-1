function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  if (vowels.includes(str[0])) {
    //this if is checking to see if first letter is a vowel
    newStr = str + "way";
    return newStr;
  } else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return newStr;
  }
}

module.exports = translatePigLatin;
