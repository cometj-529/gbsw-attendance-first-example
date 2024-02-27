const groupList = document.querySelector(".group-list");

const data = [
  {
    id: 1,
    name: "그룹1",
  },
  {
    id: 2,
    name: "그룹2",
  },
];

data.forEach((e) => {
  const newLi = document.createElement("li");
  newLi.innerText = e.name;

  newLi.addEventListener("click", () => {
    console.log(e.id);
  });

  groupList.appendChild(newLi);
});
