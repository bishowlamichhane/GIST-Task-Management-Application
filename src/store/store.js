
import { create } from "zustand";


const useStore = create((set)=>({
    
    loggedIn:false,
    accessToken:null,
    refreshToken:null,
    
    setTotalTasks:()=>set(state=>({
        totalTasks:state.totalTasks+1
    })),
    
    taskArray:JSON.parse( localStorage.getItem("taskArray") ) || [{task:"Host a meeting",isDone:false}],
          setTaskArray: (newTaskArray) => {
        localStorage.setItem("taskArray", JSON.stringify(newTaskArray));
        set({
            taskArray: newTaskArray,
        });
    },
    doingArray:JSON.parse(localStorage.getItem("doingArray")) || [{task:"GIST Project",isDone:false}],
    setDoingArray: (newDoingArray) => {
        localStorage.setItem("doingArray", JSON.stringify(newDoingArray));
        set({
            doingArray: newDoingArray,
        });
    },
    doneArray:JSON.parse(localStorage.getItem("doneItems"))||[],
    setDoneArray:(newTask)=>{
        
        localStorage.setItem("doneItems",JSON.stringify(newTask));
        set({
        doneArray:newTask
    })},
   
    

    userData:null,
   

    setUserData: (loggedIn, userData = null) => {
        if (loggedIn) {
            localStorage.setItem("userData", JSON.stringify(userData)); // Convert userData to JSON string
        } else {
            localStorage.removeItem("userData");
        }
    
        set({ userData });
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

    initialAuth: () => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const userDataString = localStorage.getItem("userData");
       
        let userData = null;
    
        if (userDataString) {
            try {
                userData = JSON.parse(userDataString);
            } catch (err) {
                console.log("Error parsing string : ", err);
            }
        }
    
        if (accessToken && refreshToken && userData)
            set({ loggedIn: true, accessToken, refreshToken, userData});
    }
    



}))

export default useStore