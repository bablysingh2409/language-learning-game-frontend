import React from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {
  return (
    <div className=''>
        <div className='flex '>
            <div className='w-[20%] border-r-2'>
                <div className='w-[70%] p-6 flex flex-col items-center justify-center'>
                    <h2 className='text-xl cursor-pointer hover:text-[#280274] p-2 hover:border-2 hover:border-[#3652AD] hover:rounded font-bold'>LeaderBoard</h2>
                    <h2 className='text-xl cursor-pointer hover:text-[#280274] p-2 hover:border-2 hover:border-[#3652AD] hover:rounded font-bold'>Profile</h2>
                </div>
            </div>
            <div className='w-[2px] h-[100vh] bg-gray-500'></div>
            <div className='w-[60%] p-3'>
                <div className='flex flex-col justify-center m-auto w-[80%]'>
                    <h2 className='text-6xl m-3 font-bold'>Bably Kumari</h2>
                    <p className='text-lg font-bold text-[#280274] ml-6'>Email: bably@gmail.com</p>
                    <ul className='flex flex-col mt-4 gap-5 items-center'>
                        <li className='w-[60%] border-2 p-3 text-2xl font-semibold'>English score <span className='float-end text-2xl font-bold'>50/100 </span></li>
                        <li className='w-[60%] border-2 p-3 text-2xl font-semibold'>Hindi Score <span className='float-end text-2xl font-bold'>60/100</span></li>
                        <li className='w-[60%] border-2 p-3 text-2xl font-semibold'>French Score <span className='float-end text-2xl font-bold'>40/100</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile