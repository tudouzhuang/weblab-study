import React, { useState } from "react";

const App = (props) => {
  return (
    <div>
      <h1>&emsp;Tudouzhuang's Note</h1>
      <TextChoose />
      <Todolist />
    </div>
  );
};

function Least_dia() {

  const [choose_but, setbutton] = useState("");

  const [delete_but, delbutton] = useState("");

  const setbutton = (e) => {
    setInputText(e.target.value);
  }

}



function TextChoose() {

  const [list_add, setListAdd] = useState([]); 

  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddToList = () => {
    if (inputText.trim() !== "") { 
      setListAdd([...list_add, inputText]); // 将新项添加到list_add
      setInputText(""); // 清空输入框
    }
  };

  const handle_delete = (e) => {
    
  }

  return (
    <div>
    <h3>
    &emsp;&emsp;
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      &emsp;
      {/* 按钮，点击后将输入的文本添加到列表中 */}
      <button onClick={handleAddToList}>Add to-do!</button>
    </h3>
      <ul>  {/* ol = orderlist , ul = unorderlis*/}
        {list_add.map((item, index) => (
          <div>
             <li key={index}>
              <label>
                   <input type="checkbox" />
              </label>
              &emsp;{item}&emsp;
              <button>X</button>
             </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

// 保持 Todolist 组件名称不变
const Todolist = () => {
  return <div>need to complete</div>;
};

export default App;
