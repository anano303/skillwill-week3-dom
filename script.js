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

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.id.includes("correct")) {
      score += 2;
      updateScore();
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "red";

      // Optionally, remove red color after a short delay (e.g., 1000 milliseconds)
      setTimeout(() => {
        btn.style.backgroundColor = "";
      }, 1000);
    }
  });
});
function updateScore() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Score: ${score}`;
  }
}
