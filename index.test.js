const translatePigLatin = require("./index");

describe("translate", () => {
  // vowel 1
  test("apple -> appleway", () => {
    // actual value
    const actual = translatePigLatin("apple");
    // expected
    expect(actual).toEqual("appleway");
  });
  // vowel 2
  test("else -> elseway", () => {
    // actual value
    const actual = translatePigLatin("else");
    // expected
    expect(actual).toEqual("elseway");
  });
  // vowel 3
  test("giraffe -> iraffegay", () => {
    // actual value
    const actual = translatePigLatin("giraffe");
    // expected
    expect(actual).toEqual("iraffegay");
  });
  // vowel 4
  test("glove -> oveglay", () => {
    // actual value
    const actual = translatePigLatin("glove");
    // expected
    expect(actual).toEqual("oveglay");
  });
  // vowel 5
  test("udder -> udderway", () => {
    // actual value
    const actual = translatePigLatin("udder");
    // expected
    expect(actual).toEqual("udderway");
  });
  test("california -> aliforniacay", () => {
    // actual value
    const actual = translatePigLatin("california");
    // expected
    expect(actual).toEqual("aliforniacay");
  });
});
// words starting with different vowels
// translate("apple") -> "appleyway"
// translate("else") -> "elseway"
// words starting with one consonant
// translate("giraffe") -> "iraffegay"
