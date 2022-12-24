// console.log("Hii Shivam!")

let arr = [
  "JavaScript uses the keywords var, let and const to declare variables.",
  "Strings are text, written within double or single quotes.",
  "In a programming language, variables are used to store data values.",
  "Simple statements in JavaScript are generally followed by a semicolon character, just as they are in C, C++, and Java.",
  "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
  "The standards for JavaScript is the ECMAScript Language Specification (ECMA-262).",
  "Do not confuse JavaScript with the Java programming language, JavaScript is not Interpreted Java.",
];

let msg = document.querySelector("#msg");
let typeWords = document.querySelector("#mywords");
let btn = document.querySelector("#btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  msg.innerHTML = arr[randomNumber];
  // console.log(msg);
  let date = new Date();
  startTime = date.getTime();
  btn.innerHTML = "Done";
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (value, index) {
    if (value == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;

  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of errors are " +
    errorWords +
    "."
  );
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  // console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.floor((wordCount / totalTime) * 60);

  let finalMsg = `You typed total at ${speed} words per minutes. `;

  finalMsg += compareWords(msg.innerHTML, totalStr);

  msg.innerHTML = finalMsg;
};

let f = true;
btn.addEventListener("click", function () {
  if (f == true) {
    // typeWords.disabled = false;
    playGame();
    f = false;
  } else {
    // typeWords.disabled = true;
    // btn.innerHTML = "Start Again";
    endPlay();
    f = true;
  }
});
