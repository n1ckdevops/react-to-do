import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import styles from './ToDoList.module.scss'
import { ToDo } from "../../models/todo-item"


export const ToDoList = () => {
  const todos: ToDo[] = [{
    id: 0,
    text: 'Первая задача',
    isDone: false
  },

  {
    id: 1,
    text: 'Вторая задача',
    isDone: true
  },
  {
    id: 2,
    text: 'Третья задача',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвертая задача',
    isDone: true
  }];


  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${styles.failed}`}>
        {
          todos
            .filter((item) => !item.isDone)
            .map((item, index) => {
              return (
                <ToDoListItem key={index} toDoItem={item} />
              );
            })
        }
      </ul>
      <ul className={`${styles.list} ${styles.completed}`}>
        {
          todos
            .filter((item) => item.isDone)
            .map((item, index) => {
              return (
                <ToDoListItem key={index} toDoItem={item} />
              );
            })
        }
      </ul>
    </div>
  )
}