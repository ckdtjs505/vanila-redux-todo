import { createStore } from "redux";

const $list = document.querySelector("#list");
const $input = document.querySelector("#input");
const $form = document.querySelector("form");

const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_LIST:
      return [];
    case REMOVE_LIST:
      return [];
    default:
      return [];
  }
};

const listStore = createStore(reducer);

const createList = value => {
  let $li = document.createElement("li");
  $li.innerHTML = value;
  $list.append($li);
};

const submitHandle = e => {
  e.preventDefault();
  let value = $input.value;
  $input.value = "";
  listStore.dispatch({ type: ADD_LIST, text: value });
  createList(value);
};

$form.addEventListener("submit", submitHandle);
