const enterArrow = document.querySelector(".enterArrow");
const container = document.querySelector(".container");
const text = document.querySelector(".text");
const showList = document.querySelector(".showList");

let id = 1;
text.addEventListener("change", () => {
  myFunction();
  enterArrow.addEventListener("click", () => {
    showList.textContent = "";
    const saved = document.createElement("div");
    saved.classList.add("saved");
    saved.textContent = "Your note is saved !!!";
    showList.append(saved);
    setTimeout(() => {
      showList.textContent = "";
    }, 3000);
  });
});

function myFunction() {
  const getInput = document.createElement("div");
  getInput.classList.add("getInput");
  const getList = document.createElement("span");
  getList.classList.add("getList");
  const spanTag = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  getList.textContent += id + ":" + " " + text.value;
  getInput.append(getList, trashIcon);
  showList.append(getInput);
  id++;
  text.value = "";
  trashIcon.addEventListener("click", () => {
    getInput.remove(getList, trashIcon);
  });
}
