import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Router>
      <Navbar />
        <Hero />
        </Router>
    </>
  )
}

export default App
