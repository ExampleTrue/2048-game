import React from 'react'
import styles from './start.module.css'

const Start = () => {
  return (
    <div className={styles.start_component}>
      <form action="" method="post">
        Email: <br />
        <input type="email" placeholder="Enter your email" /> <br />
        Password: <br />
        <input type="password" placeholder="Enter your password" /> <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Start
