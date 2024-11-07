const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

result.innerText = "";

function getString() {
  const str = textInput.value;
  if (str) {
    //console.log(`getString: ${str}`);
    return str;
  } else {
    return;
  }
}

function isValidInput() {
  const str = getString();
  if (str) {
    //console.log(`isValidInput: ${str}`);
    return str;
  } else {
    alert("Please input a value");
    return;
  }
}

function cleanString() {
  const str = isValidInput();
  if (str) {
    const regex = /[\s\W_]/gi;
    const matched = str.replace(regex, '');
    //console.log(`cleanString: ${matched}`);
    return matched;
  } else {
    return;
  }
}

function lowerCapsStr(){
  const str = cleanString();
  if (str) {
    const lowerCapsWord = str.toLowerCase();
    //console.log(`lowerCapsStr: ${lowerCapsWord}`);
    return lowerCapsWord;
  } else {
    return;
  }
}

/*

function palindromeChecker() {
  const originalStr = getString();
  const str = lowerCapsStr();
  if (str) {
    if (str.length === 1) {
      // A SINGLE LETTER
      console.log(`${str} has length of 1`);
      return `${originalStr} is a palindrome`;
    } else if (str.length % 2 === 0) {
      // EVEN LENGTH

      console.log(`${str} has even length`);
    } else if (str.length % 2 !== 0) {
      //ODD LENGTH
      console.log(`${str} has odd length`);
    }
  }
}
*/

//eg. 4 - e v e n (even) eg. 3 - o d d (odd)
const even = "doodd";
const odd = "aaabbbccc";

function getWordFirstHalf(word) {
  let wordFirstHalf = "";
  if (word.length === 1) {
    return word;
  } else {
    const wordHalfLength = Math.floor(word.length / 2);
  //console.log(wordHalfLength, word);
  // even / odd length returns the same amount
  wordFirstHalf = word.substring(0, wordHalfLength);
  return wordFirstHalf;
  }
}

function getWordSecondHalf(word) {
  let wordSecondHalf = "";
  if (word.length === 1) {
    return word;
  } else {
    const wordHalfLength = Math.floor(word.length / 2);
  if (word.length % 2 === 0) {
    // even length
    //wordSecondHalf = word.substring(wordHalfLength);
    //let wordSecondHalfBackwards = "";
    for (let i = word.length - 1; i >= wordHalfLength; i--) {
    let letter = word[i];
    //console.log(`letter: ${letter} At index: ${i}`);
    wordSecondHalf += letter;
    }
  } else {
    // odd length
    //wordSecondHalf = word.substring(wordHalfLength + 1);
    //let wordSecondHalfBackwards = "";
    for (let i = word.length - 1; i >= wordHalfLength; i--) {
    let letter = word[i];
    //console.log(`letter: ${letter} At index: ${i}`);
    wordSecondHalf += letter;
    }
  }
  return wordSecondHalf;
  }
}

function palindromeChecker() {
  const word = lowerCapsStr();
  let palindrome = false;
  if (word) {
    // a valid word
    if (word.length === 1) {
      palindrome = true;
      return palindrome;
    } else {
      const wordFirstHalf = getWordFirstHalf(word);
      const wordSecondHalf = getWordSecondHalf(word);
      const wordHalfLength = Math.floor(word.length / 2); 

      for (let i = 0; i < wordHalfLength; i++) {
        if (wordFirstHalf[i] === wordSecondHalf[i]) {
          //console.log(`${wordFirstHalf[i]} is ${wordSecondHalf[i]}`);
          palindrome = true;
          } else {
            //console.log(`${wordFirstHalf[i]} is not ${wordSecondHalf[i]}`);
            return;
          }
      }
    }
  } else {
    // not a valid word
    //exit function
    return;
  }
  //console.log(palindrome);
  return palindrome;
 }

function palindromeResult() {
  const isPalindrome = palindromeChecker();
  const originalStr = getString();
  if (isPalindrome) {
    return `${originalStr} is a palindrome`;
  } else {
    return `${originalStr} is not a palindrome`;
  }
}

checkButton.addEventListener("click", () => {
  result.innerText = palindromeResult();
  result.style.display = "block";
  
  textInput.value = "";
  
});

/*
const wordLength = word.length;
console.log(`word: ${word} (length: ${wordLength})`);

if (wordLength % 2 === 0) {
  console.log("Even length");
} else {
  console.log("Odd length");
  const wordLengthHalf = Math.floor(word.length / 2);
  console.log("middle letter:", word[wordLengthHalf], "letter position:", wordLengthHalf + 1);
  const newWordFH = word.substring(0,wordLengthHalf);
  console.log("NewWordFH: ", newWordFH);
  const newWordSH = word.substring(wordLengthHalf+1);
  console.log("NewWordFH: ", newWordSH);
}

const wordLengthHalf = Math.floor(word.length / 2);
console.log("word half-length: ", wordLengthHalf);

let wordFirstHalf = "";
for (let i = 0; i < wordLengthHalf; i++) {
  let letter = word[i];
  wordFirstHalf += letter;
}
console.log(`first half: ${wordFirstHalf} (length: ${wordFirstHalf.length})`);

console.log(getWordFirstHalf(even));
console.log(getWordSecondHalf(even), "\n");
console.log(getWordFirstHalf(odd));
console.log(getWordSecondHalf(odd));

let wordSecondHalf = "";
for (let i = wordLengthHalf; i < wordLength; i++) {
  let letter = word[i];
  wordSecondHalf += letter;
}
console.log(`second half: ${wordSecondHalf} (length: ${wordSecondHalf.length})`);

let wordSecondHalfBackwards = "";
for (let i = wordLength - 1; i >= wordLengthHalf; i--) {
  let letter = word[i];
  //console.log(`letter: ${letter} At index: ${i}`);
  wordSecondHalfBackwards += letter;
}
console.log(`second half backwards: ${wordSecondHalfBackwards} (length: ${wordSecondHalfBackwards.length})`);

function check(wordFirstHalf, wordSecondHalf) {
  let palindrome = false;
  for (let i = 0; i < wordLengthHalf; i++) {
    if (wordFirstHalf[i] === wordSecondHalfBackwards[i]) {
      console.log(`${wordFirstHalf[i]} is ${wordSecondHalfBackwards[i]}`);
      palindrome = true;
      } else {
        console.log(`${wordFirstHalf[i]} is not ${wordSecondHalfBackwards[i]}`);
        return;
      }
    }
    return palindrome;
  }

const isAPalindrome = check();
if (isAPalindrome) {
  console.log("This is a palindrome!");
} else {
  console.log("This is not a palindrome!");
}
*/