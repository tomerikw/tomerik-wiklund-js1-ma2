//question 1
const button = document.querySelector("#bg");

button.onclick = function () {
  document.body.style.background = "green";
};

//question 2
const togglee = document.querySelector(".togglee");
const toggler = document.querySelector(".toggler");

function toggleButton() {
  togglee.classList.toggle("extra");

  console.log(toggleButton);
}

toggler.onclick = toggleButton;

//question 3
const paragraphsdropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");

paragraphsdropdown.onchange = function () {
  console.log(event.target.value);

  const selectedValue = this.value;

  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    paragraphsContainer.innerHTML += `<p class="content">Peekaboo</p>`;
  }
};
//question 4
const textarea = document.querySelector(".input");
const characterCount = document.querySelector(".char-count");

textarea.onkeyup = function () {
  console.log(event.target.value.length);

  const textlength = event.target.value.length;

  characterCount.innerHTML = textlength;
};

//question 5

const body = document.querySelector("body");

function showScrolling() {
  console.log(window.scrollY);

  const scrolledY = window.scrollY;

  if (scrolledY > 35) {
    document.body.classList.add("highlight");
  } else {
    document.body.classList.remove("highlight");
  }
}

window.onscroll = showScrolling;
