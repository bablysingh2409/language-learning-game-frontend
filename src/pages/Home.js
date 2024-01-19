import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/login')
    }
  return (
    <div className=''>
        <div className='flex p-7 justify-between'>
            <div className='w-[50%]'>
                <img src='https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?w=740&t=st=1705657403~exp=1705658003~hmac=41719a122a82c1181436260f668a7be5597b76ad6a4617932bca7ddbc5ca3435' 
                alt='books' className='w-full'/>
            </div>
             <div className='w-[40%] flex items-center'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <p className='text-2xl w-[60%] font-bold'>The Free ,Fun,and effective way to learn a language!</p>
                    <button className='w-[70%] bg-[#379237] text-white border-2 border-[#379237] p-3
                    text-lg font-semibold rounded hover:bg-[#54B435]' onClick={handleClick}>I ALREADY HAVE AN ACCOUNT</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Home