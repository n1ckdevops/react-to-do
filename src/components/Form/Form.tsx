import styles from './Form.module.scss'

export const Form = () => {
  return (
    <div className={styles.form}>
      <form action="#">
        <label>
          <input type="text" className={styles.input} />
          <button className={styles.button}></button>
        </label>
      </form>
    </div>
  )
}