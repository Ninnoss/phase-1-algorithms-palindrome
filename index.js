function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replaceAll(' ', '');
  const reverseWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reverseWord;
}
isPalindrome('nurses run');
/* 
  Add your pseudocode here
  -reverse the word and add it to a variable
  -compare original word with the reversed word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
