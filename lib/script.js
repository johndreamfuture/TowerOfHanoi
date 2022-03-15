
//Build three layers
/**
 * 1 only small can put on big .
 * 2 the goal is to move to another sticker.
 * 3 how to set up the model to represent the things?
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  */



//move
let box = "o"
let c = document.getElementsByClassName("c")[0]
c.addEventListener('click', lift)
let middle = document.getElementsByClassName("div2")[0]
middle.addEventListener("click", drop)
let right = document.getElementsByClassName("div3")[0]
right.addEventListener("click", drop)

function lift() {
  box = "sky"
  console.log(c.dataset.name + " cicrle is lifting!")
}
function drop() {
  box = "down"
  console.log("put down" + this.innerText)
}