import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import ProtectedRoutes from './hooks/ProtectedRoutes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' />
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='main' element={<MainPage />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
