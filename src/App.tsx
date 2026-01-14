import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<div className="p-8">Login Page</div>} />
        <Route path="/history" element={<div className="p-8">History Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App