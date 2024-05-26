import './App.css'
import Clubs from './components/clubs/Clubs'
import Events from './components/events/Events'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='page'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/events' element={<Events />} />
          <Route path='/log-in' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
