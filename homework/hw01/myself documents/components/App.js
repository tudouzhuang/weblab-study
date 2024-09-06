import React, { useState } from "react";
import '../style.css';



const App = (props) => {
  return (
    <div className="playwrite-text">
      <h1>&emsp;Tudouzhuang's Note</h1>
      <TextChoose />
    </div>
  );
};

function Least_dia(props) {

  const [isChosen, setIsChosen] = useState(false);  // 用于复选框的状态
  const [isDeleted, setIsDeleted] = useState(false);  // 用于删除状态

  const handleChoose = () => {
    setIsChosen(!isChosen);  // 切换 isChosen 状态
  };

  // 删除按钮的处理函数
  const handleDelete = () => {
    setIsDeleted(true);  // 将 isDeleted 设置为 true
  };

  // 如果项目被删除，返回 null 不再渲染内容
  if (isDeleted) return null;

  return (
    <div className="">
    <input className="suse-headline" type="checkbox" checked={isChosen} onChange={handleChoose} />
      <label className = {isChosen ? 'deleted_text' : null}>
        &emsp;{props.text}&emsp;
      </label>
      {/* 删除按钮，点击时删除项目 */}
      <button onClick={handleDelete}>X</button>
    </div>
  );
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
      <button onClick={handleAddToList} className="suse-headline">Add to-do!</button>
    </h3>
      <ul>  {/* ol = orderlist , ul = unorderlis*/}
        {list_add.map((item, index) => (
          <div>
             <Least_dia text={item}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
