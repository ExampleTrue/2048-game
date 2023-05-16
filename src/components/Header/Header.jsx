import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="./2048_logo.svg"
        alt="2048 game logo"
        className={styles.logo_item}
      />
      <p>2048 is a beautifull game with numbers</p>
    </div>
  )
}

export default Header
