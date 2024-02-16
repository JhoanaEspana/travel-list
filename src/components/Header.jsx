import styles from './header.module.css'
import iconCalendar from '../assets/calendar-tick.svg'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.banner__container}>
      <div className={styles.banner__content}>
        <div className={styles.banner__title}>
          <h1>TRAVEL CHECK LIST</h1>
          <div className={styles.banner__title__date}>
            <img src={iconCalendar} alt='calendar-tick' />
            <h3>8/02/2024</h3>
          </div>
        </div>
        <div className={styles.banner__logo}>
          <img src={logo} alt='calendar-tick' />
        </div>
      </div>
    </header>
  )
}

export default Header
