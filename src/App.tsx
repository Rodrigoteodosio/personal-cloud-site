import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DataOwnership from './components/DataOwnership'
import Comparison from './components/Comparison'
import Audience from './components/Audience'
import NeverDo from './components/NeverDo'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Signup from './components/Signup'

function App() {
  const [showSignup, setShowSignup] = useState(false)

  if (showSignup) {
    return <Signup />
  }

  return (
    <div>
      <Header />
      <Hero onCreateAccount={() => setShowSignup(true)} />
      <HowItWorks />
      <DataOwnership />
      <Comparison />
      <Audience />
      <NeverDo />
      <FinalCTA onCreateAccount={() => setShowSignup(true)} />
      <Footer />
    </div>
  )
}

export default App
