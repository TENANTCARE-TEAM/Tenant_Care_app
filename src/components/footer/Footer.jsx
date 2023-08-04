import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaTwitter,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Footer() {
  const [year, setYear] = useState()
  const [input , setInput] = useState("")

  useEffect(() => {
    const date = new Date();

    setYear(date.getFullYear())
  },[year])

  const handleChange = (e) => {
   setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(input === ""){
      toast.error("Please enter your Email")
    } else {
      toast.success("Thank you for Subscribing!!!")
      setInput("")
    }
  }

  return (
    <footer className="px-4 md:px-[8%] w-full py-10 bg-[#ECF1F8] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 md:grid place-content-center w-full md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-slate-900 cursor-pointer">
            TENANT<span className="text-[#00befe]">CARE</span>
          </h1>
          <p className="text-gray-400 break-words">
           Simplifying property management. Manage properties, tenants,
           and work orders effortlessly with our all-in-one solution. Streamline
           operations, enhance tenant communication, and maximize efficiency.</p>
          <div className="flex gap-3 mt-4 text-[#00befe]">
            <Link to='https://www.facebook.com/AmesaSolutions'><FaFacebook /></Link>
            <Link to='https://twitter.com/AmesaSolutions'><FaTwitter /></Link>
            <Link to='https://github.com/TENANTCARE-TEAM'><FaGithub /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-center ">
          <span className="text-[#222] font-medium ">Quick Links</span>
          <Link to="/" className=" text-gray-400 hover:text-[#00befe]">Home</Link>
          <Link to="/about" className=" text-gray-400 hover:text-[#00befe]">About Us</Link>
          <Link to="/signIn" className=" text-gray-400 hover:text-[#00befe]">Sign In</Link>
          <Link to="/getStarted" className="text-gray-400 hover:text-[#00befe]">Get Started</Link>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <span className="text-[#222] font-medium">Subscribe</span>
          <p className="mt-2 text-gray-500 text-sm">
            Subscribe to get latest property
          </p>
          <form onSubmit={handleSubmit}
          className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email address "
              className="outline-none p-3 bg-white rounded-lg"
              value={input}
              onChange={handleChange}
            />
            <button type="submit"
            className="w-full text-center bg-[#00befe] p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
       <p className="md:mt-2 mt-5 text-gray-500 text-sm max-[768px]:text-center ">
        &copy; {year} Tenant Care All rights reserved.
       </p>
    </footer>
  );
}

export default Footer;
