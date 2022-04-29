import React from 'react'
import styles from './spinner.module.css'
const spinner = () => {
  return <div className={styles['lds-dual-ring']}></div>
}

export default spinner
