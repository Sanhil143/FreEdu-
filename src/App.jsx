
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Auth from './components/layout/Auth'
import Home from './components/pages/Home'

/**
 * The main app component, which is a react-router BrowserRouter.
 * This component contains a Routes component with three Route components.
 * The first Route component renders the Landingpage component at the root route.
 * The second Route component renders the Home component at the route '/home'.
 * The third Route component renders the Auth component at the route '/auth'.
 */
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
