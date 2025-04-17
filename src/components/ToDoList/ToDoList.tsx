import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import styles from './ToDoList.module.scss'
export const ToDoList = () => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${styles.failed}`}>
        <ToDoListItem />
      </ul>
      <ul className={`${styles.list} ${styles.completed}`}>
        <ToDoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  )
}