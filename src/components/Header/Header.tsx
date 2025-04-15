import styles from './Header.module.scss'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.link}>ToDo</a>
      </div>
    </header>
  )
}