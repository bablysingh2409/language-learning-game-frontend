import React, {useState } from 'react'
import LeaderBoard from '../components/LeaderBoard';
import UserProfile from '../components/UserProfile';

function UserPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedTab, setSelectedTab] = useState('profile');

   

    const handleTab = async (language) => {
        setSelectedLanguage(language); 
        setSelectedTab('leaderBoard');     
    }

    return (
        <div className=''>
            <div className='flex ml-8'>
                <div className='w-[20%] border-r-2'>
                    <div className='w-[70%] p-6 flex flex-col items-center justify-center'>
                        <h2 className='text-xl cursor-pointer hover:text-[#280274] p-2 hover:border-2 hover:border-[#3652AD] hover:rounded 
                    font-bold border-b-2' onClick={() => setIsOpen(!isOpen)}>LeaderBoard</h2>
                        {
                            isOpen &&
                            <div className='w-[200px] p-5 border-2'>
                                <p className='cursor-pointer text-xl font-bold text-[#D63484] p-2 hover:bg-[#8ACDD7]
                                 hover:border-[#8ACDD7] w-full' onClick={() => handleTab('english')}>English</p>
                                <p className='cursor-pointer text-xl font-bold text-[#D63484] p-2 hover:bg-[#8ACDD7]
                                 hover:border-[#8ACDD7] w-full' onClick={() => handleTab('hindi')}>Hindi</p>
                                <p className='cursor-pointer text-xl font-bold text-[#D63484] p-2 hover:bg-[#8ACDD7]
                                 hover:border-[#8ACDD7] w-full' onClick={() => handleTab('french')}>French</p>
                            </div>
                        }
                        <h2 className='text-xl cursor-pointer hover:text-[#280274] p-2 hover:border-2 
                        hover:border-[#3652AD] hover:rounded font-bold border-b-2' onClick={() => {
                            setSelectedTab('profile')
                            setIsOpen(!isOpen)
                            }}>Profile</h2>
                    </div>
                </div>
                <div className='w-[2px] h-[100vh] bg-gray-500'></div>
                {
                    selectedTab === 'profile' ?
                        <UserProfile />
                        : <LeaderBoard language={selectedLanguage}/>
                }
            </div>
        </div>
    )
}

export default UserPage