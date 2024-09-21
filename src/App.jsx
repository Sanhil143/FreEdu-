
import './App.css'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Auth from './components/layout/Auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return(
    <Router>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/login' element={<Auth/>}/>
      </Routes>
    </Router>
  )
}

export default App
