"use strict"



// -------------------- 1-masala start --------------------

// function scramble(str, indices) {
//     let result = '';
//     for (let i = 0; i < indices.length; i++) {
//       result += str[indices[i]];
//     }
//     return result;
//   }

//   const str = 'abcd';
//   const indices = [0, 3, 1, 2];
//   const rearrangedString = scramble(str, indices);
//   console.log(rearrangedString);

// -------------------- 1-masala end --------------------




// -------------------- 2-masala start --------------------

// function decipherWord(sticker, comment) {
//     let word = '';
//     for (let i = 0; i < sticker.length; i++) {
//       const index = sticker[i];
//       if (index < comment.length) {
//         const letter = comment[index].toLowerCase();
//         word += letter;
//       } else {
//         return 'No mission today';
//       }
//     }
//     return word;
//   }

//   const sticker = [5, 0, 3];
//   const comment = 'I Love You';
//   const decipheredWord = decipherWord(sticker, comment);
//   console.log(decipheredWord);

// -------------------- 2-masala end --------------------





// -------------------- 3-masala start --------------------

// function castToNumbers(sequence) {
//     return sequence.map(Number);
//   }

//   const stringSequence = ["1", "2", "3.14", "4.5"];
//   const numberSequence = castToNumbers(stringSequence);
//   console.log(numberSequence);

// -------------------- 3-masala end --------------------






// -------------------- 4-masala start --------------------

// function scrollingText(text) {
//     const rotations = [];
//     const upperText = text.toUpperCase();
//     for (let i = 0; i < text.length; i++) {
//       const rotation = upperText.slice(i) + upperText.slice(0, i);
//       rotations.push(rotation);
//     }
//     return rotations;
//   }

//   const text = "codewars";
//   const rotations = scrollingText(text);
//   console.log(rotations);

// -------------------- 4-masala start --------------------





// -------------------- 5-masala start --------------------

// function sortAndStar(arr) {
//     const sortedArr = arr.sort();
//     const firstValue = sortedArr[0];
//     const result = firstValue.split('').join('***');
//     return result;
//   }

//   const strings = ["banana", "apple", "cherry"];
//   const sortedAndStarred = sortAndStar(strings);
//   console.log(sortedAndStarred);

// -------------------- 5-masala start --------------------






// -------------------- 6-masala start --------------------

// function splitStringIntoWords(str) {
//     return str.split(" ");
// }

// console.log(splitStringIntoWords("Robin Singh")); // Output: ["Robin", "Singh"]
// console.log(splitStringIntoWords("I love arrays they are my favorite")); // Output: ["I", "love", "arrays", "they", "are", "my", "favorite"]

// -------------------- 6-masala start --------------------




// -------------------- 7-masala start --------------------

// function removeFirstLast(str) {
//     const sequences = str.split(",");
//     if (sequences.length <= 2 || str === "") {
//       return null;
//     }
//     sequences.shift();
//     sequences.pop();
//     return sequences.join(" ");
//   }

// -------------------- 7-masala start --------------------





// -------------------- 8-masala start --------------------

// function containsValue(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === x) {
//         return true;
//       }
//     }
//     return false;
//   }

// -------------------- 8-masala start --------------------






// -------------------- 9-masala start --------------------

// function uefaEuro2016(teams, scores) {
//     const team1 = teams[0];
//     const team2 = teams[1];
//     const score1 = scores[0];
//     const score2 = scores[1];
  
//     if (score1 > score2) {
//       return `At match ${team1} - ${team2}, ${team1} won!`;
//     } else if (score1 < score2) {
//       return `At match ${team1} - ${team2}, ${team2} won!`;
//     } else {
//       return `At match ${team1} - ${team2}, teams played draw.`;
//     }
//   }

// -------------------- 9-masala start --------------------





// -------------------- 10-masala start --------------------

// function replaceWithVowels(array) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     for (let i = 0; i < array.length; i++) {
//       if (vowels.includes(String.fromCharCode(array[i]))) {
//         array[i] = vowels.find(vowel => vowel.charCodeAt(0) === array[i]);
//       }
//     }
    
//     return array;
//   }

// -------------------- 10-masala start --------------------





// -------------------- 11-masala start --------------------

// const numbers = [97, 98, 99, 100, 101];
// const asciiChars = numbers.map(num => String.fromCharCode(num));

// console.log(asciiChars);
// // Output: ['a', 'b', 'c', 'd', 'e']

// -------------------- 11-masala start --------------------
