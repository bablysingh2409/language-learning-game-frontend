import axios from "axios"


export const getLeaderBoard=async (language)=>{
    try{
     const res=await axios.get(`http://localhost:5800/leaderboard/${language}`);
     const data=await res.data;
     return data;
    }
    catch(err){
        return err;
    }
}