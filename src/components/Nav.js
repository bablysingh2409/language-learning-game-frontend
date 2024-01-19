import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <div className='h-[15vh] bg-[#0766AD] p-3'>
                <div className='flex justify-between items-center '>
                    <div className='w-14 border-2 border-black rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-3'>
                        <Link to='/'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSQ-jWUA2aDeKJmN3cCBVFLbRBjlpH8Elag&usqp=CAU' alt='logo'
                               className='w-full rounded-full'
                            />
                        </Link>
                    </div>
                    <div className=' w-[50%]'>
                        {
                            isLogin ?
                                <div className='p-3'>
                                    <ul className='flex justify-around'>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/'>Home</Link></li>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/language'>Languages</Link></li>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/profile'>User Profile</Link></li>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to=''>Logout</Link></li>
                                    </ul>
                                </div> :
                                <Link to='/'><p className='text-xl text-white font-semibold hover:text-[#053B50] float-end mr-10'>Home</p></Link>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav