import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeaderBoard from './LeaderBoard';

function UserProfile() {
    


    return (
        <div className='w-[60%] p-3'>
                        <div className='flex flex-col justify-center m-auto w-[80%]'>
                            <h2 className='text-6xl m-3 font-bold text-[#D63484]'>Bably Kumari</h2>
                            <p className='text-lg font-bold text-[#280274] ml-6'>Email: bably@gmail.com</p>
                            <ul className='flex flex-col mt-4 gap-5 items-center'>
                                <li className='w-[60%] border-2 p-3 text-2xl font-semibold text-[#7E30E1]'>English score <span className='float-end text-2xl font-bold'>50/100 </span></li>
                                <li className='w-[60%] border-2 p-3 text-2xl font-semibold text-[#7E30E1]'>Hindi Score <span className='float-end text-2xl font-bold'>60/100</span></li>
                                <li className='w-[60%] border-2 p-3 text-2xl font-semibold text-[#7E30E1]'>French Score <span className='float-end text-2xl font-bold'>40/100</span></li>
                            </ul>
                        </div>
                    </div>
    )
}

export default UserProfile