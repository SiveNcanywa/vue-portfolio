import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const sentence = ["Sive Chrestena Ncanywa", "an aspiring fullstack developer ", "a young hardworker"];

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteWord() {
  let sentence = document.querySelector("#list").innerHTML.trim();
  console.log(sentence);

  let chars = await sentence.split("");
  console.log("This is the characters: ", chars, chars.length);

  while (chars.length > 0) {
    chars.pop();
    console.log(chars);
    await waitForMs(300);
    document.querySelector("#list").innerHTML = chars.join("");
  }
}

async function WriteSentence(word) {
  let characters = word.split("");
  console.log(characters);

  let intro = 0;
  while (intro < characters.length) {
    await waitForMs(100);
    document.querySelector("#list").append(characters[intro]);
    intro++;
  }
}

async function loopsentences() {
  let i = 0;
  while (true) {
    await WriteSentence(sentence[i]);
    await waitForMs(100);
    await deleteWord();
    await waitForMs(300);
    i++;
    if (i >= sentence.length) i = 0;
  }
}

loopsentences();



const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});
