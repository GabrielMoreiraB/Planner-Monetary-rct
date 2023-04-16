import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/calcContext";
import {useForm} from 'react-hook-form'
import Campo from "../components/Campo";
import Button from "../components/button";

const Home = () => {

    const porcentagem = ['5%', '10%', '15%', '20%', '30%']
    const {cash, 
        setCash, 
        percent, 
        setpercent,
        other,
        setOther, 
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

        const send = ()=> {
            console.log();
        }
        console.log(cash, percent)
  return (
  <section>
    <form 
    
    >
      <Campo
      nome='cash'
      label='Qual o valor de entrada?'
      min='1'
      change={(event)=> {
        setCash(event.target.value)}}
      />
      <h2>Qual Porcentagem desse valor você pretende guardar? </h2>
      <div className="container-button">
      {porcentagem.map(item =>{
        setOther(false)
        return (
          <Button
        key={item}
        name={item}
        value={item}
        change ={(event)=> {
          setpercent(event.target.value)
        }} 
        />
        )
      } 
        )}
      </div>
      <Button
        key= 'outro'
        name='Outro'
        value='outro'
        change ={(event)=> {
          setOther(true)
        }} 
        />
        {other && <Campo
            nome='percentOther'
            label='Escolha um outro para guardar (em %)'
            min='1'
            max='100'
            change={(event)=> {
              setpercentOther(event.target.value)}}
      />}
    </form>
  </section>
  );
};

export default Home;
