import axios from "axios"


export const getLeaderBoard=async (language)=>{
    try{
     const res=await axios.get(`https://language-learning-game-r139.onrender.com/leaderboard/${language}`);
     const data=await res.data;
     return data;
    }
    catch(err){
        return err;
    }
}