import Todoitem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <Todoitem todoName={items.name} todoDate={items.DueDate}></Todoitem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
