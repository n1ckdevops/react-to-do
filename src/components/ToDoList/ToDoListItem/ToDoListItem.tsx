import { ToDo } from '../../../models/todo-item'
import styles from './ToDoListItem.module.scss'
import { Bounce, toast } from 'react-toastify';


export const ToDoListItem = (props: { toDoItem: ToDo, updatedTodos: Function, deleteTodos: Function }) => {

  return (
    <li className={styles.item}>
      <span>{props.toDoItem.text}</span>
      <div className={styles.btns}>
        <button
          className={`${styles.btn} ${styles.trash}`}
          onClick={() => {
            props.deleteTodos(props.toDoItem);
            toast.warn('Задача удалена!', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }}
        >
        </button>


        <button
          className={`${styles.btn} ${props.toDoItem.isDone ? styles.check : styles.uncheck}`}
          onClick={() => {
            props.updatedTodos(props.toDoItem);
            toast.info(`${props.toDoItem.isDone ? 'Задача выполнена!' : 'Задача не выполнена!'}`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }}
        >
        </button>
      </div>
    </li>
  )
}