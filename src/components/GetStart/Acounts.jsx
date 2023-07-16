import {AiOutlineCheckCircle, AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="p-12 max-[400px]:p-8 md:p-20 text-center">
      <div>
        <h1 className="text-3xl font-bold text-[#00befe] cursor-pointer">
          Create <span className="text-slate-900">Account</span>
        </h1>
      </div>
      <div class="flex flex-wrap justify-center gap-7 mt-10 ">

        <div class="max-[400px]:w-full w-[278px]  overflow-hidden shadow-lg rounded-3xl border-2  border-[#00befe] p-5">
           <div class="px-2 md:px-6 py-2">
             <h1 className="text-3xl font-bold text-[#00befe]">Personal</h1>
              <span className="text-slate-900">Account</span>
                <ul className="mt-3">
                  <li className="flex items-center gap-1">
                    <AiOutlineCheckCircle className="text-[#409725]"/>
                    All in starter
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#40725]"/>
                    24 hours support
                  </li>
                  <li className="flex items-center gap-1">
                      <AiOutlineCloseCircle className='text-[#FF6746]'/>
                    Add property
                  </li>
                  <li className="flex items-center gap-1">
                      <AiOutlineCloseCircle className='text-[#FF6746]'/>
                    Finan Analyzing
                  </li>
                  <li className="flex items-center gap-1">
                      <AiOutlineCloseCircle className='text-[#FF6746]'/>
                    Customer management
                  </li>
                </ul>
              </div>
            <div className="px-6 py-2">
              <Link to='/signUp'>
                <button 
                className='w-full bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>Register</button>
              </Link>
              <p className="mt-2 text-sm text-gray-700 padding-right:16">
                All ready have account
              </p>
              <div className="mt-2">
                <Link to='/signIn'>
               <p className="text-sm cursior-pointer text-[#00befe]">Sign in</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-[400px]:w-full w-[278px]  overflow-hidden shadow-lg rounded-3xl border-2  border-[#00befe] p-5">
            <div class="px-2 md:px-6 py-2">
              <h1 className="text-3xl font-bold text-[#00befe]">Business</h1>
              <span className="text-slate-900">Account</span>
                <ul className="mt-3">
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    All in starter
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    24 hours support
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Add property
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    finan analyzing
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Customer management
                  </li>
                </ul>
              </div>
            <div className="px-6 py-2">
              <Link to='/busines/signUp'>
                <button className='w-full bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>
                  Register
                </button>
              </Link>
              <p className="mt-2 text-sm text-gray-700 padding-right:16">
                All ready have account
              </p>
              <div className="mt-2">
                <Link to='/signIn'>
               <p className="text-sm cursior-pointer text-[#00befe]">Sign in</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Account;
