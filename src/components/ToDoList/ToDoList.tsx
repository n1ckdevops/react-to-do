import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import styles from './ToDoList.module.scss'
import { ToDo } from "../../models/todo-item"


export const ToDoList = (props: { todos: ToDo[], updatedTodos: Function, deleteTodos: Function }) => {

  const isChecked = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} updatedTodos={props.updatedTodos} deleteTodos={props.deleteTodos} />
        );
      })

  }
  const isUnchecked = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} updatedTodos={props.updatedTodos} deleteTodos={props.deleteTodos} />
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