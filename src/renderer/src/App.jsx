import LoginPage from './components/pages/LoginPage'
import DashBoardPage from './components/pages/DashBoard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
