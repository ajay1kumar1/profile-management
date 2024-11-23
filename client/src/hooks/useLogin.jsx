import { useState } from "react";
import useAuthContext from './useAuthContext'
export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email,password)=>{
        setIsLoading(true)
        setError(null);
        const BE = process.env.BE || 'http://localhost:3000';
        const response = await fetch(BE+'/api/user/login',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){

            localStorage.setItem('user',JSON.stringify(json))

            dispatch({
                type:'LOGIN',
                payload:json
            })

            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}