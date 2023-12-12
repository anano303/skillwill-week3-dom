// const div = document.getElementById("none");
// const btn = document.getElementById("btnn");

// btn.addEventListener("click", (e) => {
//   e.target.style.color = "red";
//   div.style.display = "none";
// });
// btn.addEventListener("mouseout", (e) => {
//   e.target.style.color = "green";
//   div.style.display = "block";
// });

// const divEl = document.createElement("div");
// const h2El = document.createElement("h1");
// const aEl = document.createElement("a");
// const textEl = document.createTextNode("Gandalf");
// const textEl2 = document.createTextNode("Go to profile");

// h2El.append(textEl);
// aEl.append(textEl2);
// divEl.append(h2El, aEl);
// document.body.append(divEl);

let score = 0;
const btns = document.querySelectorAll("button");
let seen = {};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (seen[+btn.dataset.question]) {
      return;
    }
    seen[+btn.dataset.question] = true;

    if (btn.id.includes("correct")) {
      score += 2;
      updateScore();
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "red";
    }
  });
});
function updateScore() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Score: ${score}`;
  }
}
function resetAndRefresh() {
  score = 0;
  seen = {};
  updateScore();
  location.reload();
}
