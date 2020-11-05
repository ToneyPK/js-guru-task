import { useState } from 'react'
import './styles/App.scss'
import Header from './components/header/Header'
import About from './components/about/About'
import CTA from './components/cta/CTA'
import Featured from './components/featured/Featured'
import SignUp from './components/signup/SignUp'
import Footer from './components/footer/Footer'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="main-container">
      <Header setIsLogged={setIsLogged} isLogged={isLogged} />
      <About />
      <CTA />
      <Featured isLogged={isLogged} />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
