import About from "./pages/about/About"
import GetStarted from "./pages/getStarted/GetStarted"
import Home from "./pages/home/Home"
import {Routes, Route,} from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import Dhashboard from "./pages/TenateDhashboard/Dhashboard"
import Properties from "./pages/TenateDhashboard/Properties"

///tenant/dashboard

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/getStarted" element={<GetStarted/>}/>
      <Route path="/tenant/dashboard" element ={<Dhashboard/>}/>
      <Route path="/tenant/Properties" element = {<Properties/>}/>
    </Routes>
    </>
  )
}

export default App
