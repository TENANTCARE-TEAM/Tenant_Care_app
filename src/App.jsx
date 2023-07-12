import About from "./pages/about/About"
import GetStarted from "./pages/getStarted/GetStarted"
import Home from "./pages/home/Home"
import {Routes, Route,} from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/getStarted" element={<GetStarted/>}/>
      

    </Routes>
    </>
  )
}

export default App
