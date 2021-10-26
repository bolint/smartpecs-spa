import styles from './header.module.css'
import logo from './logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="pecs-logo" />
    </header>
  )
}

export default Header
