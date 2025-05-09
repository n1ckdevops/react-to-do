import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.link}>Home</Link >
        <Link to='/todo' className={styles.link}>To-Do List</Link >
      </div>
    </header>
  )
}