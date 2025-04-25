import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import styles from './ToDoList.module.scss'
import { ToDo } from "../../models/todo-item"


export const ToDoList = (props: { todos: ToDo[] }) => {

  const isChecked = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} />
        );
      })

  }
  const isUnchecked = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} />
        );
      })

  }
  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${styles.failed}`}>
        {isChecked()}
      </ul>
      <ul className={`${styles.list} ${styles.completed}`}>
        {isUnchecked()}
      </ul>
    </div>
  )
}