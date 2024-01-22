import axios from 'axios';

export const getExerciseByLanguage=async(language)=>{
    try{
        const res=await axios.get(`https://language-learning-game-r139.onrender.com/exercise/${language}`);
        const data=await res.data;
        return data;

    }catch(err){
        return err;
    }
}

export const submitUserScore=async (scoreData,userId)=>{
    try{
        const res=await axios.post(`https://language-learning-game-r139.onrender.com/user/submit-score/${userId}`,scoreData);
        return res;

    }catch(err){
         return err;
    }
}

export const getUpdatedScore=async (userId)=>{
    try{
        const res=await axios(`https://language-learning-game-r139.onrender.com/user/get-scores/${userId}`);
         const data=await res.data;
         return data;

    }
    catch(err){
        return err;
    }
}