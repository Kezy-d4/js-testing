// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 3
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
