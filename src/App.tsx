import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Scada from './pages/Scada'
import Adms from './pages/Adms'
import Oms from './pages/Oms'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scada" element={<Scada />} />
          <Route path="/adms" element={<Adms />} />
          <Route path="/oms" element={<Oms />} />
        </Routes>
      </main>
    </div>
  )
}
