import { createContext, useState } from "react";

export const calcContext = createContext();

export const calcProvider = ({children})=> {
    return(
      <calcContext.Provider value={{}}>
        {children}
      </calcContext.Provider>  
    )
}