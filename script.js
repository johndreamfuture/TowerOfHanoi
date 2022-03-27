//buit up the containers
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
let container3 = document.getElementById("container3")
let placeholder = document.getElementById("placeholder")
let levels = 2;
let weight = 70;
let num = 0;


let leveldown = document.querySelector("#leveldown")
let levelup = document.querySelector("#levelup")
let showlevels = document.querySelector("#showlevels")
let counter = document.querySelector("#counter")
let message = document.querySelector("#message")

leveldown.addEventListener("click", decreaseLevel)
levelup.addEventListener("click", increaseLevel)

function decreaseLevel() {
  if (levels > 2) {
    levels--;
    showlevels.innerHTML = levels
    container1.removeChild(container1.lastElementChild)

  }
}
function increaseLevel() {
  if (levels < 6) {

    levels++
    showlevels.innerHTML = levels

    let button = document.createElement("button")
    let className = `button-${levels}`

    button.classList.add("class", className)

    button.setAttribute("data-weight", weight)
    button.innerHTML = `${levels}`
    container1.appendChild(button)
    weight -= 5;
  }
}

let start = document.querySelector("#start")
start.addEventListener("click", startGame)

function startGame() {
  leveldown.disabled = true;
  levelup.disabled = true;
  container1.style.pointerEvents = "auto"
  container2.style.pointerEvents = "auto"
  container3.style.pointerEvents = "auto"
}

let reset = document.querySelector("#reset")

reset.addEventListener("click", resetGame)

function resetGame() {
  leveldown.disabled = false;
  levelup.disabled = false;
  num = 0;
  counter.innerHTML = 0;
  message.innerHTML = " ";
  showlevels.innerHTML = container1.childElementCount;
  if (placeholder.childElementCount === 1) {
    placeholder.removeChild(placeholder.lastElementChild)
  }

  
  for (let i = container1.childElementCount; i > 2; i--) {
 
    container1.removeChild(container1.lastElementChild)
    levels--
  }

  //clear container2 ElementChild
  for (let i = container2.childElementCount; i > 0; i--) {
    
    container2.removeChild(container2.lastElementChild)
    levels--
    container2.style.pointerEvents = "auto"
  }
  //clear container3 ElementChild
  for (let i = container3.childElementCount; i > 0; i--) {
    
    container3.removeChild(container3.lastElementChild)
    levels--
    container3.style.pointerEvents = "auto"

  }
}

container1.addEventListener("click", move1)
container2.addEventListener("click", move2)
container3.addEventListener("click", move3)



function move1() {
  if (placeholder.children.length === 1) {
    
    drop1()
  } else {
    lift1()

  }

}




function drop1() {
 
  if (container1.children.length === 0) {
    container1.appendChild(placeholder.lastElementChild)
    num++
    counter.innerHTML = `<b>steps:</b>&nbsp${num}`
  } else {
    if (placeholder.lastElementChild.dataset.weight < container1.lastElementChild.dataset.weight) {
      container1.appendChild(placeholder.lastElementChild)
      num++
      counter.innerHTML = `<b>steps:</b>&nbsp${num}`
    }
  }


}
function lift1() {
  
  if (container1.children.length !== 0) {
    placeholder.appendChild(container1.lastElementChild)
  }
}
//
function move2() {
  if (placeholder.children.length === 1) {
    
    drop2()
  } else {
    lift2()

  }

}
function drop2() {
  
  if (container2.children.length === 0) {
    container2.appendChild(placeholder.lastElementChild)
    num++
    counter.innerHTML = `<b>steps:</b>&nbsp${num}`
  } else {
    if (placeholder.lastElementChild.dataset.weight < container2.lastElementChild.dataset.weight) {
      container2.appendChild(placeholder.lastElementChild)
      num++
      counter.innerHTML = `<b>steps:</b>&nbsp${num}`
    }
  }

  if (container2.children.length === levels) {
    message.innerHTML = "Great job!"
    container2.style.pointerEvents = "none"
    container1.style.pointerEvents = "none"
    container3.style.pointerEvents = "none"
    leveldown.disabled = true;
    levelup.disabled = true;


  }


}
function lift2() {
  
  if (container2.children.length !== 0) {
    placeholder.appendChild(container2.lastElementChild)
  }
}
//
function move3() {
  if (placeholder.children.length === 1) {
    
    drop3()
  } else {
    lift3()

  }

}
function drop3() {
  
  if (container3.children.length === 0) {
    container3.appendChild(placeholder.lastElementChild)
    num++
    counter.innerHTML = `<b>steps:</b>&nbsp${num}`
  } else {
    if (placeholder.lastElementChild.dataset.weight < container3.lastElementChild.dataset.weight) {
      container3.appendChild(placeholder.lastElementChild)
      num++
      counter.innerHTML = `<b>steps:</b>&nbsp${num}`
    }
  }
  if (container3.children.length === levels) {
    message.innerHTML = "Great job!"
    container3.style.pointerEvents = "none"
    container2.style.pointerEvents = "none"
    container1.style.pointerEvents = "none"
    leveldown.disabled = true
    levelup.disabled = true


  }


}
function lift3() {
  
  if (container3.children.length !== 0) {
    placeholder.appendChild(container3.lastElementChild)
  }
}
