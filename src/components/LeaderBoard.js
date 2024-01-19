import React from 'react'

function LeaderBoard({ language }) {
    console.log(language)

    const user = [
        {
            name: 'bably',
            marks: 50
        },
        {
            name: 'bably',
            marks: 50
        },
        {
            name: 'bably',
            marks: 50
        },
        {
            name: 'bably',
            marks: 50
        },
        {
            name: 'bably',
            marks: 50
        }

    ]
    return (
        <div className=' w-full p-6'>
            <div className='w-[80%]  m-auto p-4'>
                <h1 className='text-5xl font-bold text-[#D63484] text-center'>{language} Language Top Students</h1>
                <div className='flex p-4 gap-2 m-3 w-full justify-between pr-5'>
                    <h2 className='text-2xl font-bold text-[#7E30E1]'>Name</h2>
                    <h2 className='text-2xl font-bold text-[#7E30E1] '>Total Marks</h2>
                </div>
                {
                    user.map((data, i) => {
                        return (
                            <div key={i} className='flex p-4 border-2 rounded shadow-md bg-[#8ACDD7] gap-2 m-3 w-full pr-16 justify-between'>
                                <h2 className='text-xl font-semibold'>{data.name}</h2>
                                <h2 className='text-xl font-semibold'>{data.marks}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeaderBoard;