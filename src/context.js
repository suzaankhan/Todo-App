
import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const global = {
    isLogin : false,
    email : '',
    username : ''
}

const AppProvider = ({children}) => {

    const [state, setState] = useState(global);

    return (
        //we can use suzaan khan data anywhere now  
        <AppContext.Provider value={global}> 
            {children}
        </AppContext.Provider>
    )

}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};