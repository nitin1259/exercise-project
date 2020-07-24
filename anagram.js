const str1 = "anagram";
const str2 = "naambarg";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charMap1 = charMap(str1);
  const charMap2 = charMap(str2);

  // console.log(charMap2);

  for (let c in charMap1) {
    if (charMap1[c] !== charMap2[c]) {
      return false;
    }
  }

  return true;
}

function charMap(str) {
  let charMap = {};

  for (let c of str) {
    charMap[c] = charMap[c] + 1 || 1;
  }

  return charMap;
}

console.log(isAnagram(str1, str2));
