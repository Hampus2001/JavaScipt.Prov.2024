// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  // Din kod här
  let equalLetter = 0;
  let longestWord = "";
  let lowerCase1 = str1.toLowerCase();
  let lowerCase2 = str2.toLowerCase();
  if (str1.length > str2.length) {
    longestWord = str1;
  } else {
    longestWord = str2;
  }

  for (let i = 0; i < longestWord.length; i++) {
    if (lowerCase1[i] == lowerCase2[i]) {
      equalLetter++;
    }
  }
  return equalLetter;
}

console.log(equalLetterPositions("HEjSA", "Banna"));
module.exports = equalLetterPositions;
