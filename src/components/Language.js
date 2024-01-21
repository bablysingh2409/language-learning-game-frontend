import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchExerciseDetails } from '../redux/reducers/exerciseReducer';


function Language() {
  const navigate=useNavigate();
  const dispatch=useDispatch();

    const handleClick=(language)=>{
          
        dispatch(fetchExerciseDetails(language));
          navigate(`/exercises/${language}`);
    }
    return (
        
        <div className=''>
            <div className='flex flex-col justify-center items-center p-4 gap-10 w-[80%] m-auto'>
                <div className='p-5 mt-3'>
                    <p className='text-4xl font-bold'>I want to learn...</p>
                </div>
                <div className='flex justify-evenly w-[90%] gap-4'>
                    <div className='w-[100%] shadow-lg m-3 p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={()=>handleClick('english')}>
                        <div className='w-full p-6 flex items-center flex-col gap-3'>
                            <img src='https://img.freepik.com/free-photo/flag-united-kingdom_1401-252.jpg?w=900&t=st=1705659297~exp=1705659897~hmac=a7e803866b72466f68b4e24e0a86a4b539d68b53cdaece2d003c3c62b68be090'
                                alt='english' className='w-[80%]' />
                            <p className='text-xl font-bold'>English</p>
                        </div>
                    </div>
                    <div className='w-[100%] shadow-lg m-3 p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={()=>handleClick('hindi')}>
                        <div className='w-full p-6 flex items-center flex-col gap-3'>
                            <img src='https://img.freepik.com/free-photo/flag-india_1401-132.jpg?w=900&t=st=1705659118~exp=1705659718~hmac=95baf28d7057c6f070d6e63ce8e5d67e06874df10f80c9257d4db65cb0072fa9'
                                alt='hindi' className='w-[80%]' />
                            <p className='text-xl font-bold'>Hindi</p>
                        </div>
                    </div>
                    <div className='w-[100%] shadow-lg m-3 p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={()=>handleClick('french')}>
                        <div className='w-full p-6 flex items-center flex-col gap-3'>
                            <img src='https://img.freepik.com/free-photo/flag-france_1401-114.jpg?w=900&t=st=1705659251~exp=1705659851~hmac=4db3772f42748f4ecb4770b3c8563d2ff58fb74b566ad69f6468ce599fd79ebd'
                                alt='french' className='w-[80%]' />
                            <p className='text-xl font-bold'>French</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Language