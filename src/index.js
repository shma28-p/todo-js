import "./styles.css";

// <div><p>text</p></div> を返す
function createDivTag(text) {
  // create div
  const div = document.createElement("div");
  div.className = "list-row";
  // create p
  const pTodoTitle = document.createElement("p");
  pTodoTitle.innerText = text;
  // insert p into div
  div.appendChild(pTodoTitle);
  return div;
}

// テキストを受け取り完了エリアに li で追加
function insertCompList(text) {
  const divComp = createDivTag(text);
  const liComp = document.createElement("li");
  liComp.appendChild(divComp);
  document.getElementById("complete-list").appendChild(liComp);
  const buttonBack = document.createElement("button");
  buttonBack.innerText = "戻す";
  buttonBack.addEventListener("click", () => {
    document.getElementById("complete-list").removeChild(liComp);
  });
  divComp.append(buttonBack);
  liComp.append(divComp);
}

function createInCompTag(text) {
  const divTodo = createDivTag(text);
  // create li
  const liTodo = document.createElement("li");
  // create buttons
  const buttonComp = document.createElement("button");
  buttonComp.innerText = "完了";
  const buttonDel = document.createElement("button");
  buttonDel.innerText = "削除";

  // complete process
  buttonComp.addEventListener("click", () => {
    insertCompList(text);
    document.getElementById("incomplete-list").removeChild(liTodo);
  });

  // delete process
  buttonDel.addEventListener("click", () => {
    document.getElementById("incomplete-list").removeChild(liTodo);
  });

  divTodo.appendChild(buttonComp);
  divTodo.appendChild(buttonDel);

  liTodo.appendChild(divTodo);

  return liTodo;
}

const onClickAdd = () => {
  const inputArea = document.getElementById("add-text");
  const newTag = createInCompTag(inputArea.value);
  // insert li into  ul
  document.getElementById("incomplete-list").appendChild(newTag);
  inputArea.value = "";
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
