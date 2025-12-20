import "./App.css";
import Appname from "./Components/Appname.jsx";
import Addtodo from "./Components/Addtodo.jsx";
import TodoItems from "./Components/TodoItemsc.jsx";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = { name: itemName, DueDate: itemDueDate };
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <>
      <Appname />
      <Addtodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}
      <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;
