

let circlecontainer = document.getElementsByClassName("circlecontainer")

console.log(circlecontainer)


let layer = document.getElementsByClassName("layer")

console.log(layer)

let placeholder = ""


// layer.forEach(element => {
//   element.addEventListener("click", lift)
// });
// circlecontainer.forEach(element => {
//   element.addEventListener("click", drop)
// });

for (let i = 0; i < layer.length; i++) {
  layer[i].addEventListener("click", lift)
}
for (let i = 0; i < circlecontainer.length; i++) {
  circlecontainer[i].addEventListener("click", drop)
}


function lift() {
  console.log("lift")
}
function drop() {
  console.log("drop")
}



let test111 = document.getElementsByClassName("test1-1-1")[0]
test111.addEventListener("click", fun)
let test11 = document.getElementsByClassName("test1-1")[0]
test11.addEventListener("click", fun2)
let test1 = document.getElementsByClassName("test1")[0]
test1.addEventListener("click", fun3)

function fun(e) {
  console.log(e.target + "was clicked")
  //console.log(e.currentTarget + "was clicked")
  console.log("test111 was clicked")
}
function fun2(e) {
  console.log(e.target + "was clicked")
  console.log("test11 was clicked")
}
function fun3(e) {
  console.log(e.target + "was clicked")
  console.log("test1 was clicked")
}

let button1 = document.getElementsByClassName("button1")[0]
button1.addEventListener("click", fun4)
function fun4() {
  console.log("button1 was clicked")
}
let button2 = document.getElementsByClassName("button2")[0]
button2.addEventListener("click", fun5)
function fun5() {
  console.log("button2 was clicked")
}

let button3 = document.getElementsByClassName("button3")[0]
button3.addEventListener("click", funbtn3)
function funbtn3() {
  console.log("button3 was clicked")
}
let button4 = document.getElementsByClassName("button4")[0]
button4.addEventListener("click", funbtn4)
function funbtn4() {
  console.log("button4 was clicked")
}
let button5 = document.getElementsByClassName("button5")[0]
button5.addEventListener("click", funbtn5)
function funbtn5() {
  console.log("button5 was clicked")
}