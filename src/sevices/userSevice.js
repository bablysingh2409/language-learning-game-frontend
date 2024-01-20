import axios from 'axios';

export const getExerciseByLanguage=async(language)=>{
    try{
        const res=await axios.get(`http://localhost:5800/exercise/${language}`);
        const data=await res.data;
        return data;

    }catch(err){
        return err;
    }
}

export const submitUserScore=async (scoreData,userId)=>{
    try{
        const res=await axios.post(`http://localhost:5800/user/submit-score/${userId}`,scoreData);
        return res;

    }catch(err){
         return err;
    }
}

export const getUpdatedScore=async (userId)=>{
    try{
        const res=await axios(`http://localhost:5800/user/get-scores/${userId}`);
         const data=await res.data;
         return data;

    }
    catch(err){
        return err;
    }
}