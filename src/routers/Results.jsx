import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/calcContext";

const Results = () => {

    const {cash,  
        percent, 
        day,  
        lastDay} = useContext(CalcContext);

        const result = cash*(percent/100);
        const time = (lastDay - day +1);
        const dispend = (cash - result)/time;
    return ( 
        <div>
            <h1>Planner Monetary 💰</h1>
            <p>Levando em consideração a entrada em dinheiro de: R$ {cash}</p>
            <p>E a porcentagem que se pretende guardar {percent}%</p>
            <h2>Então vamos guardar um total de: R$ {(cash, percent) && result}</h2>
            <h2>Durante o tempo de: {(day, lastDay)&& time} dias </h2>
            <h2>Para que isso ocorra, você poderá gastar apenas R$ {dispend} por dia!</h2>
        </div>
     );
}
 
export default Results;