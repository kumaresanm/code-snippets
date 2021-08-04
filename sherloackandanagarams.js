// Two strings are anagrams of each other if the letters of one string
// can be rearranged to form the other string. Given a string, find the
// number of pairs of substrings of the string that are anagrams of each other.

const str1 = "ifailuhkqq";
const str2 = "kkkk";

function sherlockAndAnagrams(str) {
  let duplicateVals = str
    .split("")
    .filter((val, i) => str.indexOf(val) !== i).length;
  if (!duplicateVals) return 0;
  let anagramsCount = 0;
  let subStrs = getAllSubsctrings(str);
  console.log(subStrs);
  for (let i = 0; i < subStrs.length; i++) {
    anagramsCount += countAnagrams(i, subStrs);
  }
  return anagramsCount;
}

function countAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex];
  const arrRest = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (
      currentElement.length === arrRest[i].length &&
      isAnagram(currentElement, arrRest[i])
    ) {
      counter++;
    }
  }

  return counter;
}

function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function getAllSubsctrings(str) {
  let subStrArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      subStrArr.push(str.slice(i, j));
    }
  }
  return subStrArr;
}

console.log(sherlockAndAnagrams(str2));
