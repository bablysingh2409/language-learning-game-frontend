import axios from 'axios'

export const signup=async(userData)=>{
    const res=await axios.post('http://localhost:5800/auth/signup',userData);
     return res;
}


export const login=async(userData)=>{
    try{
    const res=await axios.post('http://localhost:5800/auth/login',userData);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

