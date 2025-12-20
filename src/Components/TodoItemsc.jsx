import Todoitem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
          <Todoitem todoName={items.name} todoDate={items.DueDate}></Todoitem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
