const list = document.querySelector("#list");
const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  let value = input.value;
  let $li = document.createElement("li");
  $li.innerHTML = value;
  input.value = "";
  list.append($li);
});
