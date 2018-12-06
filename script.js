const button = document.querySelector("a");
//const buttonAnchor = document.querySelector("button a");
const buttonStyle = button.style;

let count = 0;

function run() {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  if (count < 10) {
    buttonStyle.top = `${x}%`;
    buttonStyle.left = `${y}%`;
    count++;
  } else {
    buttonStyle.top = "50%";
    buttonStyle.left = "50%";
    buttonStyle.transform = "translate(-50%,-50%)";
    button.innerHTML = `WINNER`;
    button.classList.remove("btn-danger");
    button.classList.add("btn-success");
  }
}
