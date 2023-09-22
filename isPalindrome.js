/*
Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
*/

// Write your code below

const isPalindrome = (word) => {
  console.log(word);

  // convert word into an array for easy editing
  let myWordArray = word.split(``);
  console.log(myWordArray);

  // eliminate the center letter if the word has odd number of characters
  if (myWordArray.length % 2 !== 0) {
    myWordArray.splice(word.length / 2, 1);
  }
  console.log(myWordArray);

  // set up two arrays, each with half the words.  The second array is in reverse order
  let firstHalf = myWordArray.splice(0, myWordArray.length / 2);
  let secondHalf = myWordArray.reverse();
  console.log(`first half: ${firstHalf}, secondHalf: ${secondHalf}`);

  // test the two arrays against each other
  let isPalindrome = true;
  for (let i = 0; i < firstHalf.length; i++) {
    console.log(`testing ${firstHalf[i]} vs ${secondHalf[i]}`);
    if (firstHalf[i] !== secondHalf[i]) {
      isPalindrome = false;
      break;
    }
    // console.log(isPalindrome);
  }

  return isPalindrome;
};

console.log(isPalindrome("ghngerregnig"));
