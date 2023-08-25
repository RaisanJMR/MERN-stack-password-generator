import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' />
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='main' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
