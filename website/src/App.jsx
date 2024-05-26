import './App.css'
<<<<<<< HEAD
import Login from './components/login/Login'
import Body from './components/body/Body'
=======
import Clubs from './components/clubs/Clubs'
import Events from './components/events/Events'
import Home from './components/home/Home'
>>>>>>> b0f1f3f15e5929dac964308793892d7949b0a0ae
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

function App() {
  return (
<<<<<<< HEAD
    <div className='page'>
      <Navbar />
      <Body />
      <Login/>
    </div>
=======
    <Router>
      <div className='page'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/events' element={<Events />} />
          <Route path='/log-in' element={<Clubs />} />
        </Routes>
      </div>
    </Router>
>>>>>>> b0f1f3f15e5929dac964308793892d7949b0a0ae
  )
}

export default App
