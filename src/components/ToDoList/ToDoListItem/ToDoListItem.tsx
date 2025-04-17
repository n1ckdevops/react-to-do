import styles from './ToDoListItem.module.scss'
export const ToDoListItem = () => {
  return (
    <li className={styles.item}>
      <span>Первая задача</span>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.trash}`}></button>
        <button className={`${styles.btn} ${styles.check}`}></button>
      </div>
    </li>
  )
}