//buitl up the levels
let container1 = document.getElementById("container1")
let levels = 2;

let leveldown = document.querySelector("#leveldown")
let levelup = document.querySelector("#levelup")
let showlevels = document.querySelector("#showlevels")

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
    button.innerHTML = `${levels}`
    container1.appendChild(button)

  }
}
//
let placeholder = 0;


const div = {
  move: function () {
    // if (placeholder) {
    //   this.drop()
    // } else {
    //   this.lift()
    // }
    // this.drop
    // this.lift
  },
  drop: function () {
    console.log("drop")
    // if (this.lastElementChild == null || placeholder.dataset.weight < this.lastElementChild.dataset.weight) {
    //   this.appendChild(placeholder)
    //   placeholder = 0;

    //   num++

    //   counter.innerHTML = num;
    //   if (this.childNodes.length === 6) {
    //     message.innerText = "Great job!"
    //   }

    // }
  },
  lift: function () {
    console.log("lift")
    // if (this.firstElementChild) {


    //   placeholder = this.lastElementChild
    //   place.appendChild(placeholder)

    // }
  }
}


//below, add the lift and drop function
let container2 = document.querySelector("#container3")
let container3 = document.querySelector("#container3")
//container1
container1.addEventListener("click", fun1)

//container2
container2.addEventListener("click", fun2)


//container3
container3.addEventListener("click", fun3)

function fun1() {
  div.lift.call(container1)
}
function fun2() {
  div.lift.call(container2)
}
function fun3() {
  div.lift.call(container3)
}
//object


//move function

//container1 2,3 have the same function move. So I buid a move function in  a class



// new container1= new Container()
// new container2= new Container()
// new container3= new Container()


// game()

// game.add()


// container1.add()



// class Game(){ 

//   constructor(){ 
//     this.poles = [new Box(), new Box(), new Box()]

//   }

//   move(from, to){ 

//   }

//   lifti
// }