const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.classList.add("red-paragraph");
redP.textContent = "Hey I'm red!";
redP.setAttribute("style", "color: red;");

const blueH3 = document.createElement("h3");
blueH3.classList.add("blue-heading3");
blueH3.textContent = "I'm a blue h3!";
blueH3.setAttribute("style", "color: blue;");

const blackPinkDiv= document.createElement("div");
blackPinkDiv.classList.add("black-pink-div");
blackPinkDiv.style.cssText = "background-color: pink; border: 4px solid black;";

  const childH1 = document.createElement("h1");
  childH1.classList.add("black-pink-div-child-h1");
  childH1.textContent = "I'm in a div";

  const childP = document.createElement("p");
  childP.classList.add("black-pink-div-child-p");
  childP.textContent = "ME TOO!";

  blackPinkDiv.appendChild(childH1)
  blackPinkDiv.appendChild(childP);

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(blackPinkDiv);


