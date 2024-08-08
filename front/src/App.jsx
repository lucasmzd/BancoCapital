import {Route, Routes, useLocation} from 'react-router-dom'
import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import EmptyNavBar from './components/EmptyNavBar/EmptyNavBar'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Appointments from './views/appointments/appointments'
import AppointmentForm from './views/AppointmentForm/AppointmentForm'
import About from './views/About/About'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import ErrorPage from './views/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'

function App() {

  const {pathname} = useLocation()
  const emptyNavBarRoutes = ['/', '/login', '/register'];

  return (
    <>
      {emptyNavBarRoutes.includes(pathname) ? <EmptyNavBar /> : <NavBar />}
      <div className={styles.centerContainer}>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/appointments" element={<Appointments />}/>
          <Route path="/appointments/schedule" element={<AppointmentForm />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
