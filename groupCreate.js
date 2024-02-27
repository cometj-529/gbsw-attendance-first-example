const nameInput = document.querySelector("#name");
const createBtn = document.querySelector("#create-btn");

createBtn.addEventListener("click", () => {
  const name = nameInput.value;

  console.log(name);
});
