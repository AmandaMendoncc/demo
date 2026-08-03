import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Fep from './pages/Fep'
import Scada from './pages/Scada'
import Dms from './pages/Dms'
import Oms from './pages/Oms'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fep" element={<Fep />} />
          <Route path="/scada" element={<Scada />} />
          <Route path="/dms" element={<Dms />} />
          <Route path="/oms" element={<Oms />} />
        </Routes>
      </main>
    </div>
  )
}
