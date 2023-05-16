import React from 'react'
import styles from './app.module.css'
import StartComponent from './screens/Start/Start'
import GameComponent from './screens/Game/Game'
import ResultComponent from './screens/Result/Result'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  // const game_default = {
  //   mode: '4x4',
  //   stratedAt: 0,
  //   finishedAt: 0,
  //   score: 0,
  //   user: null, //need use id from database
  // }

  return (
    <>
      <Header />
      <div className={styles.main_area}>
        <div className={styles.active_area}>
          <StartComponent />
          <GameComponent />
          <ResultComponent />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
