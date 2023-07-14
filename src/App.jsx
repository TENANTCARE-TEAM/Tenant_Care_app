import About from "./pages/about/About"
import GetStarted from "./pages/getStarted/GetStarted"
import Home from "./pages/home/Home"
import {Routes, Route,} from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import Dhashboard from "./pages/TenateDhashboard/Dhashboard"
import Properties from "./pages/TenateDhashboard/Properties"
import Dashboard from './pages/LanDashboard/Dashboard'
import Tenants from './pages/LanDashboard/Tenants'
import Requests from './pages/LanDashboard/Requests'
import AddProperty from './pages/LanDashboard/AddProperty'
import MyProperties from './pages/LanDashboard/Properties'
import ViewProperty from './pages/LanDashboard/ViewProperty'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/GetStarted" element={<GetStarted/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/tenant/dashboard" element ={<Dhashboard/>}/>
      <Route path="/tenant/Properties" element = {<Properties/>}/>
      <Route path='/landlord/Dashboard' element={<Dashboard/>}/>
      <Route path="/landlord/Properties" element={<MyProperties/>}/>
      <Route path="/landlord/Tenants" element={<Tenants/>}/>
      <Route path="/landlord/AddProperty" element={<AddProperty/>}/>
      <Route path="/landlord/Requests" element={<Requests/>}/>
      <Route path="/landlord/Dashboard/ViewProperty" element={<ViewProperty/>}/>
    </Routes>
    </>
  )
}

export default App
