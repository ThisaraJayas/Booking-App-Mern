import { RegisterFormData } from "./Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const register = async (FormData: RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`,{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(FormData)
    })
    const responseBody = await response.json()
    if(!responseBody.ok){
        throw new Error(responseBody.message)
    }
}