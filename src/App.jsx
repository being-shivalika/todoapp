import "./App.css";
import Appname from "./Components/Appname.jsx";
import Addtodo from "./Components/Addtodo.jsx";
import Todoitem1 from "./Components/Todoitem1.jsx";
import Todoitem2 from "./Components/Todoitem2.jsx";

function App() {
  return (
    <>
      <Appname />
      <div className="todoitem">
        <Addtodo />
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </>
  );
}

export default App;
