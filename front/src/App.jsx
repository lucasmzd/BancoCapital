import {Route, Routes, useLocation} from 'react-router-dom'
import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Appointments from './views/appointments/appointments'
import About from './views/About/About'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import ErrorPage from './views/ErrorPage/ErrorPage'

function App() {

  const {pathname} = useLocation()
  const hideNavBarRoutes = ['/', '/login', '/register'];

  return (
    <>
      {!hideNavBarRoutes.includes(pathname) && <NavBar />}
      <div className={styles.centerContainer}>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/appointments" element={<Appointments />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
