import axios from 'axios'

export const signup=async(userData)=>{
    const res=await axios.post('https://language-learning-game-r139.onrender.com/auth/signup',userData);
     return res;
}


export const login=async(userData)=>{
    try{
    const res=await axios.post('https://language-learning-game-r139.onrender.com/auth/login',userData);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

