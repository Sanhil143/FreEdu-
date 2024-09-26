
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Auth from './components/layout/Auth'
import Home from './components/pages/Home'

function App() {
  return(
    <Router>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </Router>
  )
}

export default App
