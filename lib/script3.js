
let container1 = document.getElementById("container1")
let levels = 2;

let level1 = document.querySelector("#level1")
let level2 = document.querySelector("#level2")

level1.addEventListener("click", decreaseLevel)
level2.addEventListener("click", increaseLevel)

function decreaseLevel() {
  if (levels > 2) {
    levels--;
    container1.removeChild(container1.lastElementChild)

  }
}
function increaseLevel() {
  if (levels < 6) {
    console.log("before:" + levels)
    levels++
    console.log("after:" + levels)
    let button = document.createElement("button")
    let className = `button-${levels}`
    button.classList.add("class", className)
    button.innerHTML = `${levels}`
    container1.appendChild(button)

  }
}
