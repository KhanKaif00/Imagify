import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [user, setUser] = useState(null)  //later we we will get the user from the backend
    const [showLogin, setShowLogin] = useState(false)  
    const [token, setToken] = useState(localStorage.getItem("token")) 
    const [credit, setCredit] = useState(false)


    const backendUrl =  import.meta.env.VITE_BACKEND_URL 
    const navigate = useNavigate()

    const loadCreditsData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/user/credits', 
                 {headers:{token}} )

            console.log("Credits data:", data)

            if(data.success){
                setCredit(data.user.credits)
                setUser(data.user)
            }

        }catch (error) {
            console.error("Error loading credits data:", error);
        }
    }

    const generateImage = async (prompt) => {
        try{

            const {data} = await axios.post(backendUrl + '/api/image/generate-image',{prompt}, 
                {headers:{token}})
             
                if(data.success){
                    loadCreditsData() //load the credits data again after generating the image
                    return data.image 
                }
                else{
                    toast.error(data.message)
                    loadCreditsData() 
                    if(data.creditbalance === 0){
                        toast.error("You don't have enough credits")

                     navigate('/buy')
                    }
                }



        } catch (error) {
            toast.error("Error generating image")
            console.error("Error generating image:", error);
        }
}

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
    }

    useEffect(() => {
        if(token){
            loadCreditsData()
        }
    }, [token]) //when the token changes, we will load the credits data


    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider