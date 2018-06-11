/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
const activate = (element) => {
  element.classList.add(`enabled`);
  element.classList.remove(`disabled`);
  console.log(element.classList);
}

const deactivate = (element) => {
  element.classList.add(`disabled`);
  element.classList.remove(`enabled`);
  console.log(element.classList);
}

document.querySelector("#activate-flight").addEventListener("click", () => {
  activate(document.querySelector("#flight"));
});

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

document.querySelector("#activate-mindreading").addEventListener("click", () => {
  activate(document.querySelector("#mindreading"));
});

document.querySelector("#activate-xray").addEventListener("click", () => {
  activate(document.querySelector("#xray"));
});

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click", () => {
  const allPowers = document.querySelectorAll(".power");
  allPowers.forEach((power) => activate(power));
});

document.querySelector("#deactivate-all").addEventListener("click", () => {
  const allPowers = document.querySelectorAll(".power");
  allPowers.forEach((power) => deactivate(power));
});