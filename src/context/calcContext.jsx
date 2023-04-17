import { createContext, useState } from "react";

const CalcContext = createContext();

const CalcProvider = ({children})=> {

    const [cash, setCash] = useState();
    const [percent, setpercent] = useState();
    const [other, setOther] = useState(false);

    const [day, setDay] = useState();
    const [lastDay, setLastDay] = useState();


    let results = (cash*(percent/100))
    



    return(
      <CalcContext.Provider 
      value={{
        cash, 
        setCash, 
        percent, 
        setpercent, 
        other,
        setOther, 
        day, 
        setDay, 
        lastDay, 
        setLastDay, 
        }}>
        {children}
      </CalcContext.Provider>  
    )
}

export { CalcContext, CalcProvider};