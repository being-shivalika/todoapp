import "./App.css";
import Appname from "./Components/Appname.jsx";
import Addtodo from "./Components/Addtodo.jsx";
import TodoItems from "./Components/TodoItemsc.jsx";

function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      DueDate: "4/12/2025",
    },
    {
      name: "Go to college",
      DueDate: "4/12/2025",
    },
    {
      name: "Hello world",
      DueDate: "02/02/2025",
    },
  ];
  return (
    <>
      <Appname />
      <Addtodo />
      <TodoItems todoItems={todoitems}></TodoItems>
    </>
  );
}

export default App;
