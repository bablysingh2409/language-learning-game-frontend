import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../sevices/auth';

function SignUp() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signup(userData);
            if (res.status === 200) {
                setUserData({
                    name:'',
                    email:'',
                    password:''
                })
                navigate('/login');
            }
            else {
                console.log(res)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }
    return (
        <div className='w-[70%] p-3 m-auto'>
            <div className=' w-[80%] m-auto p-4 shadow-lg shadow-blue-500/50 mt-6'>
                <h1 className='text-center font-semibold text-5xl p-3'>Create Your profile</h1>
                <form onSubmit={handleSubmit} className='flex flex-col w-ful  justify-center items-center p-4'>
                    <input type='text' placeholder='Your Name...' className='w-[80%] p-3 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={userData.name} onChange={handleChange} name='name' />
                    <input type='email' placeholder='Your Email...' className='w-[80%] p-3 border-2
             border-[#B6BBC4] rounded-md text-lg m-2' value={userData.email} onChange={handleChange} name='email' />
                    <input type='password' placeholder='Your Password...' className='w-[80%] p-3 border-2
             border-[#B6BBC4] rounded-md text-lg m-2' value={userData.password} onChange={handleChange} name='password' />
                    <button className='w-[80%] p-3 border-2 border-[#0766AD] bg-[#0766AD] text-white rounded-md 
            text-xl m-2 font-semibold hover:bg-[#91C8E4] hover:text-black'>CREATE ACCOUNT</button>
                </form>
                <Link to="/login">
                    <p className='text-center text-blue-700 mt-[-1rem] hover:text-[#0766AD] cursor-pointer'>Or Login instead</p>
                </Link>
            </div>
        </div>
    )
}

export default SignUp