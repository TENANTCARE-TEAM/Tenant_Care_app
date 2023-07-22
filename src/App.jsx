
import { Routes, Route, } from 'react-router-dom'
import { BuContent, About, GetStarted, Home, SignIn, SignUp, Dashboard, Dhashboard, Properties, MyProfile, LanEditProfile,Tenants, EditProfile, Requests, AddProperty, MyProperties, ViewProperty, SignUpB , EditProperty, Profile} from './pages'
import PriveRoute from './PrivateRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/business/signUp' element={<SignUpB/>}/>
        <Route path='/business/signIn' element ={<BuContent/>}/>
      
        <Route to="/tenant/dashboard" element={<PriveRoute/>}>
          <Route path="/tenant/dashboard" element={<Dhashboard />} />
        </Route>

        <Route to="/tenant/Properties" element={<PriveRoute/>}>
          <Route path="/tenant/Properties" element={<Properties />} />
        </Route>

        <Route to="/tenant/Profile" element={<PriveRoute/>}>
          <Route path="/tenant/Profile" element={<Profile />} />
        </Route>

        <Route to="/tenant/Profile/Edit" element={<PriveRoute/>}>
          <Route path="/tenant/Profile/Edit" element={<EditProfile />} />
        </Route>

        <Route to="/Tenant/dashboard/ViewProperty/:property_id" element={<PriveRoute/>}>
          <Route path="/Tenant/dashboard/ViewProperty/:property_id" element={<ViewProperty />} />
        </Route>

        <Route to="/landlord/Dashboard" element={<PriveRoute/>}>
          <Route path='/landlord/Dashboard' element={<Dashboard />} />
        </Route>

        <Route to="/landlord/Properties" element={<PriveRoute/>}>
          <Route path="/landlord/Properties" element={<MyProperties />} />
        </Route>

        <Route to="/landlord/Tenants" element={<PriveRoute/>}>
          <Route path="/landlord/Tenants" element={<Tenants />} />
        </Route>

        <Route to="/landlord/AddProperty" element={<PriveRoute/>}>
          <Route path="/landlord/AddProperty" element={<AddProperty />} />
        </Route>

        <Route to="/landlord/Requests" element={<PriveRoute/>}>
          <Route path="/landlord/Requests" element={<Requests />} />
        </Route>     
        
        <Route to="/landlord/Profile" element={<PriveRoute/>}>
          <Route path="/landlord/Profile" element={<MyProfile />} />
        </Route>   

        <Route to="/landlord/Profile/Edit" element={<PriveRoute/>}>
          <Route path="/landlord/Profile/Edit" element={<LanEditProfile />} />
        </Route>               
        
        <Route to="/landlord/Properties/Edit/:property_id" element={<PriveRoute/>}>
          <Route path="/landlord/Properties/Edit/:property_id" element={<EditProperty />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
