import React from 'react';
import styles from '../App.css';

export default UserNav => {
  return(
    <header>
      <nav className={styles.nav}>
        <a className={styles.navLink.active} href="#">Inicio</a>
        <a className={styles.navLink} href="#">User</a>
      </nav>
    </header>
  )
}