import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { exerciseDetailSelector } from '../redux/reducers/exerciseReducer';
import { userDetailSelector,actions } from '../redux/reducers/userDetailsReducer';
import { useNavigate } from 'react-router-dom';
import { getUpdatedScore, submitUserScore } from '../sevices/userSevice';
import { useParams } from 'react-router-dom';
function Exercise() {
    const [score, setScore] = useState(0);
    const [quize, setQuize] = useState(true);
    const {language}=useParams();
    const [idx, setIdx] = useState(0);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { exercises } = useSelector(exerciseDetailSelector);
    const {user}=useSelector(userDetailSelector);
    const [showResult, setShowResult] = useState(false);
    const [userAnswer, setUserAnswer] = useState(Array(exercises.length).fill(''));
    const totalScore = exercises.reduce((acc, exercise) => {
        if (exercise.difficulty === 'hard') return acc + 5;
        if (exercise.difficulty === 'medium') return acc + 3
        else return acc + 1
    }, 0);
    const handleClick = () => {
        setQuize(false);
    }

    const handleIndex =async () => {
        const currentAns = userAnswer[idx];
        if (exercises[idx].correctOption === currentAns && exercises[idx].difficulty === 'medium') {
            setScore((prev) => prev + 3);
        }
        else if (exercises[idx].correctOption === currentAns && exercises[idx].difficulty === 'hard') {
            setScore((prev) => prev + 5)
        }
        else if (exercises[idx].correctOption === currentAns && exercises[idx].difficulty === 'easy') {
            setScore((prev) => prev + 1)
        }
        else {
            setScore((prev) => prev + 0)
        }

        setIdx((prevIdx) => prevIdx + 1);

        if (idx + 1 >= exercises.length) {
            const data={
                language,
                score
            }
            setShowResult(true);
            setIdx(0);
           
            await submitUserScore(data,user._id);
            const getNewScore=await getUpdatedScore(user._id);
            dispatch(actions.updatedScore(getNewScore));
            

            
        }
    }

    const handleAnswerChange = (e) => {
        const newAnswer = [...userAnswer];
        newAnswer[idx] = e.target.value;
        setUserAnswer(newAnswer);
    }

    const handleBackToExercise = () => {
        setQuize(true);
        setShowResult(false);
        navigate('/profile');
    }


    return (
        <div className='h-[100vh] p-3 '>
            {
                showResult ?
                    <div className='w-[30%] m-auto p-5 mt-8 flex flex-col shadow-lg shadow-[#001B79] gap-5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
                        <h1 onClick={handleBackToExercise} className='cursor-pointer hover:text-blue-900 text-2xl font-bold float-end 
                        relative top-[-10px] left-[-5px]'>X</h1>
                        <h1 className='text-3xl text-[#D63484] font-semibold'>Your Result is-</h1>
                        <p className='text-4xl font-bold text-[#001B79]'>{`${score}/${totalScore}`}</p>
                    </div>

                    : <div className='w-[80%]  m-auto '>
                        {
                            quize ?
                                <div className='m-auto w-[50%] bg-white p-6 border-2 border-white rounded flex flex-col gap-2
                                    mt-4 shadow-lg bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
                                    <h1 className='text-4xl font-bold text-center text-[#D63484]'>Quize Guide</h1>
                                    <h2 className='text-2xl font-semibold mt-3'> Total Questions: 10 </h2>
                                    <h3 className='text-xl font-semibold'>Points Breakdown:</h3>
                                    <ul className='flex flex-col ml-3 gap-3'>
                                        <li className='text-lg font-semibold'>Easy Questions: 3 questions (1 point each)</li>
                                        <li className='text-lg font-semibold'>Medium Questions: 3 questions (3 points each)</li>
                                        <li className='text-lg font-semibold'>Hard Questions: 4 questions (5 points each)</li>
                                    </ul>
                                    <div className='flex mt-4 justify-between w-full'>
                                    <button className='mt-3 p-2  border-2 border-[#7E2553] w-[30%] m-auto text-xl font-bold text-[#7E2553] hover:bg-[#7E2553]
                                     hover:text-white rounded' onClick={()=>navigate('/language')}>Exit</button>
                                    <button className='mt-3 p-2 border-2 border-[#294B29] w-[30%] m-auto text-xl font-bold text-[#294B29] hover:bg-[#294B29]
                                    hover:text-white rounded ' onClick={handleClick}>Start Test</button>
                                   
                                     </div>
                                </div>


                                :

                                <div className='m-auto w-[50%] bg-white p-6 border-2 border-white rounded flex flex-col gap-2
                              mt-4 shadow-lg bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
                                    <h2 className='text-3xl font-semibold mt-3'>{exercises[idx].question}</h2>

                                    <form className='flex flex-col ml-3 gap-3'>
                                        <div className='flex gap-5 mt-3'>
                                            <input type='radio' id='opt1' name='options' value={exercises[idx].options[0]} onChange={handleAnswerChange}
                                                checked={userAnswer[idx] === exercises[idx].options[0]} />
                                            <label className='text-xl font-semibold' htmlFor='opt1'>{exercises[idx].options[0]}</label>
                                        </div>
                                        <div className='flex gap-5 mt-3'>
                                            <input type='radio' id='opt2' name='options' value={exercises[idx].options[1]} onChange={handleAnswerChange}
                                                checked={userAnswer[idx] === exercises[idx].options[1]} />
                                            <label className='text-lg font-semibold' htmlFor='opt2'>{exercises[idx].options[1]}</label>
                                        </div>

                                    </form>
                                    <button className='mt-3 p-3 border-2 border-[#D63484] w-[30%] m-auto text-xl font-bold text-[#D63484] hover:bg-[#D63484]
                        hover:text-white rounded' onClick={handleIndex}>Next</button>
                                </div>

                        }
                    </div>
            }
        </div>
    )
}

export default Exercise