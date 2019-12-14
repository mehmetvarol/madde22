import React from 'react'
import '../src/util/normalize.css'

import './App.css'
//Components
import Header from './components/header'
import WordNews from './components/word-news'
import Trending from './components/trending'
import Happening from './components/happening'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <WordNews />
      <Trending />
      <Happening />
      <Footer />
    </div>
  )
}

export default App
