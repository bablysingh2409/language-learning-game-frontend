import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { fetchUserDetails} from '../redux/reducers/userDetailsReducer';
import Loader from '../components/Loader';


function LoginPage() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [loading,setLoading]=useState(false);
   
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Dispatch the action and wait for it to complete
           await dispatch(fetchUserDetails(userData));

            // If successful, navigate to '/Language'
            navigate('/Language');
        } catch (error) {
            console.error('Error logging in:', error);
            setLoading(false)
        } finally {
            setLoading(false);
        }
    };

    
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }
    if(loading){
        return <div className='relative top-[5rem]'>
        <Loader/>
        </div>
    }
      

    return (
      <div className='w-[70%] p-3 m-auto'>
          <div className=' w-[80%] m-auto p-4 shadow-lg shadow-blue-500/50 mt-6'>
          <h1 className='text-center font-semibold text-5xl p-3'>Login</h1>
          <form onSubmit={handleSubmit} className='flex flex-col w-ful  justify-center items-center p-4'>
              <input type='email' placeholder='Your Email...' className='w-[80%] p-3 border-2 border-[#B6BBC4]
               rounded-md text-lg m-2' value={userData.email} onChange={handleChange} name='email'/>
              <input type='password' placeholder='Your Password...' className='w-[80%] p-3 border-2 border-[#B6BBC4] 
              rounded-md text-lg m-2' value={userData.password} onChange={handleChange} name='password'/>
              <button className='w-[80%] p-3 border-2 border-[#0766AD] bg-[#0766AD]
               text-white rounded-md text-xl m-2 font-semibold hover:bg-[#91C8E4] hover:text-black'>Login</button> 
          </form>
          <Link to="/signup">
            <p className='text-center text-blue-700 mt-[-1rem] hover:text-[#0766AD] cursor-pointer'>Or SignUp instead</p>
           </Link>
          </div>
      </div>
    )
}

export default LoginPage