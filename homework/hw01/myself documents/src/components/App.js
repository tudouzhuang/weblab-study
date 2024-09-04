import React, { useState } from "react";

const App = (props) => {
  return (
    <div>
      <h1>&emsp;Tudouzhuang's Note</h1>
      {/* 正确地使用 TextChoose 组件 */}
      <TextChoose />
      <Todolist />
    </div>
  );
};

// 更改组件名称为大写 TextChoose
function TextChoose() {
  // 用于存储添加的文本项
  const [list_add, setListAdd] = useState([]); 
  // 用于存储添加的文本具体内容  
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value); // 更新输入框的文本状态
  };

  const handleAddToList = () => {
    if (inputText.trim() !== "") { // 检查输入框内容是否为空
      setListAdd([...list_add, inputText]); // 将新项添加到list_add
      setInputText(""); // 清空输入框
    }
  };

  return (
    <div>
      {/* 输入框，点击后可输入文本 */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="点击输入文本"
      />
      {/* 按钮，点击后将输入的文本添加到列表中 */}
      <button onClick={handleAddToList}>添加到列表</button>

      {/* 显示列表 */}
      <ul>
        {list_add.map((item, index) => (
          <li key={index}>{item}</li>
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
