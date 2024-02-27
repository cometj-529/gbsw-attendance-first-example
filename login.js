const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", () => {
  const id = idInput.value;
  const password = passwordInput.value;

  console.log(id);
  console.log(password);

  Cookies.set("access_token", id, { expires: 7, path: "/" });
});
