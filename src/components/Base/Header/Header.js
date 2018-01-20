import React from 'react'
import { Link } from 'react-router-dom'
import { appPages } from 'data/app_pages'
import s from './Header.scss'

const Header = ({ isMenuOpen, triggerMenu }) => (
  <header className={s.container}>
    <Link to={'/'} className={s.brand}>
      {'[logo goes here]'}
    </Link>
  </header>
)

export default Header
