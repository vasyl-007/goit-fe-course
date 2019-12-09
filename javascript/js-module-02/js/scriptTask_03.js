// Task_03

function task_03() {
  function findLongestWord(string) {
    let maxLength = 0;
    let longestWord;
    const array = string.split(" ");

    for (let i = 0; i < array.length; i++) {
      if (array[i].length > maxLength) {
        maxLength = array[i].length;
        longestWord = array[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
  console.log(findLongestWord("Google do a roll")); // 'Google'
  console.log(findLongestWord("May the force be with you")); // 'force'
}
//===============================================
