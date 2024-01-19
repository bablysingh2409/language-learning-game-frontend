import React, { useState } from 'react'

function Exercise() {
    const [quize, setQuize] = useState(true);
    const [idx, setIdx] = useState(0);
    const exercisesData = [
        {
            language: 'english',
            question: "I spoke to ____.",
            options: ["she", "her"],
            correctOption: "she",
            difficulty: 'medium',
        },
        {
            language: 'english',
            question: "Where ____ you come from?",
            options: ["do", "are"],
            correctOption: "are",
            difficulty: 'hard',
        },
        {
            language: 'english',
            question: "What time does she ___ up?",
            options: ["get", "gets"],
            correctOption: "get",
            difficulty: 'medium',
        },
        {
            language: 'english',
            question: "Where ___ he live?",
            options: ["do", "does"],
            correctOption: "does",
            difficulty: 'hard',
        },

    ];

    const handleClick = () => {
        setQuize(false);
    }

    const handleIndex = () => {
        setIdx((prevIdx) => prevIdx + 1);

        if (idx + 1 >= exercisesData.length) {
            setQuize(true);
            setIdx(0);
        }
    }


    return (
        <div className='h-[100vh] p-3 '>
            <div className='w-[80%]  m-auto'>
                {
                    quize ?
                        <div className='m-auto w-[50%] bg-white p-6 border-2 border-white rounded flex flex-col gap-2
                     mt-4 shadow-lg'>
                            <h1 className='text-4xl font-bold text-center text-[#D63484]'>Quize Guide</h1>
                            <h2 className='text-2xl font-semibold mt-3'> Total Questions: 10 </h2>
                            <h3 className='text-xl font-semibold'>Points Breakdown:</h3>
                            <ul className='flex flex-col ml-3 gap-3'>
                                <li className='text-lg font-semibold'>Easy Questions: 3 questions (1 point each)</li>
                                <li className='text-lg font-semibold'>Medium Questions: 3 questions (3 points each)</li>
                                <li className='text-lg font-semibold'>Hard Questions: 4 questions (5 points each)</li>
                            </ul>
                            <button className='mt-3 p-3 border-2 border-[#D63484] w-[30%] m-auto text-xl font-bold text-[#D63484] hover:bg-[#D63484]
                         hover:text-white rounded' onClick={handleClick}>Start Test</button>
                        </div> :

                        <div className='m-auto w-[50%] bg-white p-6 border-2 border-white rounded flex flex-col gap-2
                              mt-4 shadow-lg'>
                            <h2 className='text-3xl font-semibold mt-3'>{exercisesData[idx].question}</h2>

                            <form className='flex flex-col ml-3 gap-3'>
                                <div className='flex gap-5 mt-3'>
                                    <input type='radio' id='opt1' name='options' />
                                    <label className='text-xl font-semibold' htmlFor='opt1'>{exercisesData[idx].options[0]}</label>
                                </div>
                                <div className='flex gap-5 mt-3'>
                                    <input type='radio' id='opt2' name='options' />
                                    <label className='text-lg font-semibold' htmlFor='opt2'>{exercisesData[idx].options[1]}</label>
                                </div>

                            </form>
                            <button className='mt-3 p-3 border-2 border-[#D63484] w-[30%] m-auto text-xl font-bold text-[#D63484] hover:bg-[#D63484]
                        hover:text-white rounded' onClick={handleIndex}>Next</button>
                        </div>

                }
            </div>
        </div>
    )
}

export default Exercise