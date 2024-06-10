import './App.css'
// import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import MyAppointments from './views/MyAppointments/MyAppointments'

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <MyAppointments />
    </div>
  )
}

export default App
