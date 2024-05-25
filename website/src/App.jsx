import './App.css'
import Login from './components/login/Login'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='page'>
      <Navbar />
      <Body />
      <Login/>
    </div>
  )
}

export default App
