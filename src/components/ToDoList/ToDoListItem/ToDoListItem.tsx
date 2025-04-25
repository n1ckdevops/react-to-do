import { ToDo } from '../../../models/todo-item'
import styles from './ToDoListItem.module.scss'


export const ToDoListItem = (props: { toDoItem: ToDo, updatedTodos: Function, deleteTodos: Function }) => {
  return (
    <li className={styles.item}>
      <span>{props.toDoItem.text}</span>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.trash}`} onClick={() => props.deleteTodos(props.toDoItem)}>

          🗑️
        </button>
        <button
          className={`${styles.btn} ${props.toDoItem.isDone ? styles.check : styles.uncheck}`}
          onClick={() => props.updatedTodos(props.toDoItem)}
        >

          {props.toDoItem.isDone ? '✔️' : '❌'}
        </button>
      </div>
    </li>
  )
}