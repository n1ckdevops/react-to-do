import { ToDo } from '../../../models/todo-item'
import styles from './ToDoListItem.module.scss'


export const ToDoListItem = (props: { toDoItem: ToDo }) => {
  return (
    <li className={styles.item}>
      <span>{props.toDoItem.text}</span>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.trash}`}></button>
        <button className={`${styles.btn} ${props.toDoItem.isDone ? styles.check : styles.uncheck}`}></button>
      </div>
    </li>
  )
}