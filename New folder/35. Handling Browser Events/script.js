let x = function (event) {
  console.log(event.target);
  console.log(event.type, event.clientX, event.clientY);
  alert("Hello World1!")
};

let y = function (e) {
  console.log(e);
  alert("Hello World2!");
};
let g = function() {
  document.getElementById("btn").style.backgroundColor = "red";
}
;
btn.addEventListener("click",g);
btn.addEventListener("click", x)
y.console.error("hello");


// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");

// if (a == "2") {
//   btn.removeEventListener('click', x)
// }
