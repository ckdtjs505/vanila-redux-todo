const $list = document.querySelector("#list");
const $input = document.querySelector("#input");
const $form = document.querySelector("form");

const createList = value => {
  let $li = document.createElement("li");
  $li.innerHTML = value;
  $list.append($li);
};

const submitHandle = e => {
  e.preventDefault();
  let value = $input.value;
  $input.value = "";
  createList(value);
};

$form.addEventListener("submit", submitHandle);
