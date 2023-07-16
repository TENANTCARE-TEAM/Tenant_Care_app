import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function PriveRoute() {
    const token = Cookies.get("token")

    if(!token) {
       return <Navigate to="/signIn"/>
    }

    return <Outlet/>
}

export default PriveRoute