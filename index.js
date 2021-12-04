const textarea = document.querySelector("textarea");
const message = document.querySelector(".message");
const button = document.querySelector("button");
let test = "";
let startTime;

const typingTests = [
  "I love to code in Javascript",
  "Javascript is the most fun language to code",
  "You can do a lot of cool things in Javascript",
];

button.addEventListener("click", () => {
  if (button.innerText === "start") {
    startTest();
  } else if (button.innerText === "stop") {
    stopTest();
  } else {
    textarea.disabled = true;
    button.innerText = "start";
  }
});

function compareStrings(str1, str2) {
  const arr1 = str1.split(" ");
  const arr2 = str2.split(" ");
  const min = arr1.length > arr2.length ? arr2.length : arr1.length;
  let score = 0;
  for (let i = 0; i < min; i++) {
    if (compareWords(arr1[i], arr2[i])) {
      score++;
    }
  }
  return score;
}

function compareWords(wrd1, wrd2) {
  if (wrd1.length !== wrd2.length) {
    return false;
  }
  for (let i = 0; i < wrd1.length; i++) {
    if (wrd1[i] !== wrd2[i]) {
      return false;
    }
  }
  return true;
}

function startTest() {
  textarea.disabled = false;
  button.innerText = "stop";
  const idx = Math.floor(Math.random() * 3);
  test = typingTests[idx];
  message.innerText = "NOW TYPE THIS: " + test;
}

function stopTest() {
  const typedString = textarea.value;
  const words = test.split(" ").length;
  const finalScore = compareStrings(typedString, test);
  test = "";
  message.innerText = "you got " + finalScore + " right out of " + words;
  button.innerText = "reset";
}
