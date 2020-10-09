/*Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

function findLongestWord(string = "") {
  // Write code under this line
  const stringSplits = string.split(" ");

  let longestWord = "";
  for (const stringSplit of stringSplits) {
    if (stringSplit.length > longestWord.length) {
      longestWord = stringSplit;
    }
  }
  return longestWord;
}

console.log(findLongestWord("Google do a roll"));
