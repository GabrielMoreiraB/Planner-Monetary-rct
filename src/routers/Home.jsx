import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/calcContext";
import {useForm} from 'react-hook-form'
import Campo from "../components/Campo";

const Home = () => {

    const { register, handleSubmit, reset} = useForm();

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

        const handleInfo = (data)=> {
            console.log(data);
        }

  return (
  <section>
    <form 
    onSubmit={handleSubmit((data) => handleInfo(data))}
    >
        <Campo
        nome='cash'
        label='Qual o valor de entrada?'
        register={register}
        />
        


    </form>
  </section>
  );
};

export default Home;
