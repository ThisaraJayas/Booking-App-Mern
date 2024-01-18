
import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/Signin";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (FormData: RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(FormData)
    })
    const responseBody = await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }
}
export const validateToken = async()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:"include"
    })
    if (!response.ok) {
        throw new Error("Token invalid");
      }
    
      return response.json();
}

export const Signin = async(FormData:SignInFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include", //tell to pass http cookie
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(FormData)
    })
    const body = await response.json()
    if(!response.ok){
        throw new Error(body.message)
    }
    return body
}

export const signOut = async()=>{
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:"POST",
    })
    if(!response.ok){
        throw new Error("Error during signout")
    }
}

export const addMyHotel = async (hotelFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
      method: "POST",
      credentials: "include",
      body: hotelFormData,
    });
  
    if (!response.ok) {
      throw new Error("Failed to add hotel");
    }
  
    return response.json();
  };