import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/calcContext";

const Results = () => {

    const {cash, 
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
        setSpend } = useContext(CalcContext);
    return ( 
        <div>results</div>
     );
}
 
export default Results;