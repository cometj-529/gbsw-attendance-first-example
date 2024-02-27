const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const nameInput = document.querySelector("#name");
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", () => {
  const id = idInput.value;
  const password = passwordInput.value;
  const name = nameInput.value;

  console.log(id);
  console.log(password);
  console.log(name);
});
