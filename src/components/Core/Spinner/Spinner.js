import React from 'react'
import s from './Spinner.scss'

const Spinner = ({ styles = {} }) => (
  <span className={s.spinner} style={styles} />
)

export default Spinner
