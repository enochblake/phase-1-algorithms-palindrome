function isPalindrome(word) {
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanWord === cleanWord.split('').reverse().join('');
}

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
