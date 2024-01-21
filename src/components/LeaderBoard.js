import React, { useState ,useEffect} from 'react'
import { getLeaderBoard } from '../sevices/leaderBoard'

function LeaderBoard({ language}) {
      const [topStudents,setTopStudents]=useState([]);
      const [isTopperExist,setIsTopperExist]=useState(false);


      useEffect(() => {
        const fetchData = async () => {
            // Fetch leaderboard data when the component mounts or language changes
            try {
                const data = await getLeaderBoard(language);
                setTopStudents(data);
                setIsTopperExist(true);
                // Updating state based on the fetched data
            } catch (error) {
                console.error("Error fetching LeaderBoard data:", error);
            }
        };

        fetchData();
    }, [language]);

    if (!isTopperExist || topStudents.length===0) {
        return <div className='flex flex-col gap-4 p-4 pr-5 '>
            <h1 className='text-4xl font-bold text-[#D63484] text-center'>{language} Language Top Students</h1>
            <p className='text-2xl font-bold text-[#7E30E1]'>LeaderBoard is Empty , Participate in Language Quize To get on the leader board</p>
        </div>
    }

    return (
        <div className=' w-full p-6'>

            {topStudents.length > 0 &&
                <div className='w-[80%]  m-auto p-4'>   
                    <h1 className='text-5xl font-bold text-[#D63484] text-center'>{language} Language Top Students</h1>

                    <div className='flex p-4 gap-2 m-3 w-full justify-between pr-5'>
                        <h2 className='text-2xl font-bold text-[#7E30E1]'>Name</h2>
                        <h2 className='text-2xl font-bold text-[#7E30E1] '>Total Marks</h2>
                    </div>

                    {
                        topStudents.map((data, i) => {
                            return (
                                <div key={i} className='flex p-4 border-2 rounded shadow-md bg-[#8ACDD7] gap-2 m-3 w-full pr-16 justify-between'>
                                    <h2 className='text-xl font-semibold'>{data.name}</h2>
                                    <h2 className='text-xl font-semibold'>{data.scores}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default LeaderBoard;