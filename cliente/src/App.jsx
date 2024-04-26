import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Header from './components/Header'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign_in' element={<Signin/>}/>
      <Route path='/sign_up' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}
