
import { Routes, Route, } from 'react-router-dom'
import { About, GetStarted, Home, SignIn, SignUp, Dashboard, Dhashboard, Properties, Tenants, Requests, AddProperty, MyProperties, ViewProperty, SignUpB } from './pages'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/tenant/dashboard" element={<Dhashboard />} />
        <Route path="/tenant/Properties" element={<Properties />} />
        <Route path="/Tenant/dashboard/ViewProperty" element={<ViewProperty />} />
        <Route path='/landlord/Dashboard' element={<Dashboard />} />
        <Route path="/landlord/Properties" element={<MyProperties />} />
        <Route path="/landlord/Tenants" element={<Tenants />} />
        <Route path="/landlord/AddProperty" element={<AddProperty />} />
        <Route path="/landlord/Requests" element={<Requests />} />
        <Route path='/busines/signUp' element={<SignUpB/>}/>
      </Routes>
    </>
  )
}

export default App
