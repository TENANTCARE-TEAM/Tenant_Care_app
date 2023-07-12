import About from "./pages/about/About"
import GetStarted from "./pages/getStarted/GetStarted"
import Home from "./pages/home/Home"
import {Routes, Route,} from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import Dashboard from "./pages/LanDashboard/Dashboard"
import Properties from "./pages/LanDashboard/Properties"
import Tenants from "./pages/LanDashboard/Tenants"
import AddProperty from "./pages/LanDashboard/AddProperty"
import Requests from "./pages/LanDashboard/Requests"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/getStarted" element={<GetStarted/>}/>
      <Route path='/landlord/Dashboard' element={<Dashboard/>}/>
      <Route path="/landlord/Properties" element={<Properties/>}/>
      <Route path="/landlord/Tenants" element={<Tenants/>}/>
      <Route path="/landlord/AddProperty" element={<AddProperty/>}/>
      <Route path="/landlord/Requests" element={<Requests/>}/>
    </Routes>
    </>
  )
}

export default App
