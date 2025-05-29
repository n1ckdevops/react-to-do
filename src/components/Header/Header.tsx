import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to='/' className={getActiveClass}>Home</NavLink >
        <NavLink to='/todo' className={getActiveClass}>To-Do List</NavLink >
      </div>
    </header>
  )
}