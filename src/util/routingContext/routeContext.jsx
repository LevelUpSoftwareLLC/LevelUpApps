import React, { useContext, useReducer } from "react";
import { reducer } from "./reducers";
// here we are creating a context to pass around the app
const RouteContext = React.createContext()

export const useRouteContext = () => useContext(RouteContext)

const initialState = {
    Routes : {
        Home: "",
        Login: "", 
        Designs: "",
        Contact: "",   
        Services: "",     
        Estimates: "",    
        Portfolio: "",    
        Contact: "",
        Career:"",
        Admin:"",
        Blog: "",     
        PaymentGateway: "",
        Partner: "",
        Terms: "",
        Privact: "",

        clientName: "",
        experience: "", 
        massageType: "",   
        intensity: "",     
        lookingFor: "",    
        wheresYourPain: "", 
    }
  };

export const RouteContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(reducer, initialState);



    return (
        <RouteContext.Provider value={{...state, dispatch}}>
        {children}
        </RouteContext.Provider>
    )
}

// create reducers and actions