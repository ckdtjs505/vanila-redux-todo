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
      return [{ text: action.text, id: Date.now() }, ...state];
    case REMOVE_LIST:
      return [...state].filter(ele => ele.id !== Number(action.id));
    default:
      return [];
  }
};

const listStore = createStore(reducer);

const createList = () => {
  const list = listStore.getState();
  $list.innerHTML = "";
  list.forEach(value => {
    let $li = document.createElement("li");
    let $btn = document.createElement("button");
    $btn.innerText = "삭제";
    $btn.addEventListener("click", e => {
      const id = e.currentTarget.parentNode.id;
      dispatchDeleteTodo(id);
    });
    $li.id = value.id;
    $li.innerHTML = value.text;
    $list.append($li);
    $li.appendChild($btn);
  });
};

const addTodo = value => {
  return { type: ADD_LIST, text: value };
};

const deleteTodo = id => {
  return { type: REMOVE_LIST, id };
};

const dispatchAddTodo = value => {
  listStore.dispatch(addTodo(value));
};

const dispatchDeleteTodo = id => {
  listStore.dispatch(deleteTodo(id));
};

const submitHandle = e => {
  e.preventDefault();
  let value = $input.value;
  $input.value = "";
  dispatchAddTodo(value);
};

listStore.subscribe(() => {
  createList();
});

$form.addEventListener("submit", submitHandle);
