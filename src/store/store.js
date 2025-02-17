
import { create } from "zustand";


const useStore = create((set)=>({

    loggedIn:false,
    accessToken:null,
    refreshToken:null,

    userData:null,
    setUserData:(loggedIn,userData=null)=>{

        if(loggedIn)
            localStorage.setItem("userData",userData)
        else
        localStorage.removeItem("userData")

        set({userData})
    },

    setLoggedIn : (loggedIn,accessToken=null,refreshToken = null)=>{
        if(loggedIn){
            localStorage.setItem("accessToken",accessToken)
            localStorage.setItem("refreshToken",refreshToken)
          
        }
        else{
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")


        }
        set({loggedIn,accessToken,refreshToken})
    },

    initialAuth:()=>{
        const accessToken = localStorage.getItem("accessToken")
        const refreshToken = localStorage.getItem("refreshToken")
        const userDataString = localStorage.getItem("userData")
        
        let userData = null

        if(userDataString){
            try{
                userData = JSON.parse(userDataString)
            }catch(err){
                console.log("Error parsing string : ",err)
            }
        }

        if(accessToken && refreshToken && userData)
            set({loggedIn:true, accessToken,refreshToken,userData})
    }



}))

export default useStore