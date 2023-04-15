import { createContext, useState } from "react";

const CalcContext = createContext();

const CalcProvider = ({children})=> {

    const [cash, setCash] = useState();
    const [percent, setpercent] = useState();
    const [percentOther, setpercentOther] = useState();

    const [day, setDay] = useState();
    const [lastDay, setLastDay] = useState();
    const [save, setSave] = useState();
    const [spend, setSpend] =useState();


    return(
      <CalcContext.Provider 
      value={{
        cash, 
        setCash, 
        percent, 
        setpercent, 
        percentOther, 
        setpercentOther, 
        day, 
        setDay, 
        lastDay, 
        setLastDay, 
        save, 
        setSave, 
        spend, 
        setSpend
        }}>
        {children}
      </CalcContext.Provider>  
    )
}

export { CalcContext, CalcProvider};