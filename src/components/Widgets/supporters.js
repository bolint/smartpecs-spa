import styles from './supporters.module.css'
import ycoLogo from './yco.svg'
import beewardLogo from './beeward.svg'

function Supporters() {
  return (
      <div className={styles.supporter}>
        <h2>Támogatók</h2>
        <div className={styles.logos}>
          <a href="https://y-collective.com" target="blank" className={styles.logo}>
            <img src={ycoLogo} alt="Y-collective" />
          </a>
          <a href="https://beeward.buzz/" target="blank" className={styles.logo}>
            <img src={beewardLogo} alt="Beeward" />
          </a>
        </div>
      </div>
  );
}

export default Supporters
