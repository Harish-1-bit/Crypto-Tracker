import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import ThemeContext from './context/ThemeContext'
import ThemeButton from './components/ThemeButton'
import SearchPage from './pages/SearchPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CoinProvider } from './Coins/CoinContext'
import Singleoages from './pages/Singlepages'
import Singlepages from './pages/Singlepages'

const App = () => {

  const { theme, themes } = useContext(ThemeContext)


  return (
    <BrowserRouter>
<CoinProvider>
        <div className={`min-h-screen ${themes[theme]}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:searchQuery' element={<SearchPage />} />
          <Route path='/coins/:coinid' element={<Singlepages/>} />
        </Routes>
        <Footer />
        <ThemeButton />
      </div>
</CoinProvider>
    </BrowserRouter>
  )
}

export default App
