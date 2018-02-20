import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.scss'

const Header = ({ isMenuOpen, triggerMenu }) => (
  <header className={s.container}>
    <Link to={'/'} className={s.brand}>
      {'[ logo goes here ]'}
    </Link>
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link to={'/'} className={s.navLink}>{'home'}</Link>
        </li>
        <li className={s.navItem}>
          <Link to={'/about'} className={s.navLink}>{'about'}</Link>
        </li>
        <li className={s.navItem}>
          <Link to={'/contact'} className={s.navLink}>{'contact'}</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
