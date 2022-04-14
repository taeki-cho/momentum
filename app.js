const colors = ["red", "blue", "green", "yellow"];
const h1 = document.querySelector(".hello h1");


function handleTitleClick() {
  h1.style.color = "blue";
}
function handleContextmenu() {
    h1.innerText = "That was a right click!";
    h1.style.color = colors[0];
  }
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
  h1.style.color = colors[1];
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
  h1.style.color = colors[2];
}
function handleWindowResize() {
  //document.body.style.backgroundColor = "tomato";
  h1.innerText = "You just resized!";
  h1.style.color = colors[3];
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("All Good");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("contextmenu", handleContextmenu);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
