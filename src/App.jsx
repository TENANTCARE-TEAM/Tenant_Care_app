
import { Routes, Route, } from 'react-router-dom'
import {ApprovedProper, SignInOwner, About, GetStarted, Home, SignIn, SignUp, Dashboard, RentDashboard, Properties, MyProfile, LanEditProfile,Tenants, EditProfile, Requests, AddProperty, MyProperties, ViewProperty, SignUpOwner , EditProperty, Profile} from './pages'
import PriveRoute from './PrivateRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/Owner/signUp' element={<SignUpOwner/>}/>
        <Route path='/Owner/signIn' element ={<SignInOwner/>}/>
      
        <Route to="/Renter/dashboard" element={<PriveRoute/>}>
          <Route path="/Renter/dashboard" element={<RentDashboard />} />
        </Route>

        <Route to="/Renter/Properties" element={<PriveRoute/>}>
          <Route path="/Renter/Properties" element={<Properties />} />
        </Route>

        <Route to="/Renter/AprovedProperty" element={<PriveRoute/>}>
          <Route path="/Renter/AprovedProperty" element={<ApprovedProper />} />
        </Route>

        <Route to="/Renter/Profile" element={<PriveRoute/>}>
          <Route path="/Renter/Profile" element={<Profile />} />
        </Route>

        <Route to="/Renter/Profile/Edit" element={<PriveRoute/>}>
          <Route path="/Renter/Profile/Edit" element={<EditProfile />} />
        </Route>

        <Route to="/Renter/dashboard/ViewProperty/:property_id" element={<PriveRoute/>}>
          <Route path="/Renter/dashboard/ViewProperty/:property_id" element={<ViewProperty />} />
        </Route>

        <Route to="/Owner/Dashboard" element={<PriveRoute/>}>
          <Route path='/Owner/Dashboard' element={<Dashboard />} />
        </Route>

        <Route to="/Owner/Properties" element={<PriveRoute/>}>
          <Route path="/Owner/Properties" element={<MyProperties />} />
        </Route>

        <Route to="/Owner/Tenants" element={<PriveRoute/>}>
          <Route path="/Owner/Tenants" element={<Tenants />} />
        </Route>

        <Route to="/Owner/AddProperty" element={<PriveRoute/>}>
          <Route path="/Owner/AddProperty" element={<AddProperty />} />
        </Route>

        <Route to="/Owner/Requests" element={<PriveRoute/>}>
          <Route path="/Owner/Requests" element={<Requests />} />
        </Route>     
        
        <Route to="/Owner/Profile" element={<PriveRoute/>}>
          <Route path="/Owner/Profile" element={<MyProfile />} />
        </Route>   

        <Route to="/Owner/Profile/Edit" element={<PriveRoute/>}>
          <Route path="/Owner/Profile/Edit" element={<LanEditProfile />} />
        </Route>               
        
        <Route to="/Owner/Properties/Edit/:property_id" element={<PriveRoute/>}>
          <Route path="/Owner/Properties/Edit/:property_id" element={<EditProperty />} />
        </Route>

      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
