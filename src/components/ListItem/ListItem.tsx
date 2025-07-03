import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import styles from './ListItem.module.scss'
export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <Link className={`${styles.link} ${todo.isDone ? styles.done : styles.notDone}`}
      to={`/list/${todo.id}`}>{todo.text}</Link>
  )
}