import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/calcContext";
import {useForm} from 'react-hook-form'
import Campo from "../components/Campo";
import Button from "../components/button";
import Select from "../components/Select";
import{ Link } from 'react-router-dom';

const Home = () => {

    const porcentagem = ['5%', '10%', '15%', '20%', '30%']
    const {cash, 
        setCash, 
        setpercent,
        other,
        setOther, 
        day, 
        setDay, 
        setLastDay } = useContext(CalcContext);

        
        //console.log(cash, percent)
  return (
  <section>
    
    <h1>Planner Monetary 💰</h1>
    <form 
    >
      <Campo
      nome='cash'
      label='Qual o valor de entrada? (em R$)'
      min='1'
      change={(event)=> {
        setCash(event.target.value)}}
      />
      {cash<0 && <span>O valor deve ser maior que 0</span>}
      
      <h2>Qual Porcentagem desse valor você pretende guardar? </h2>
      <div className="container-button">
      {porcentagem.map(item =>{
        return (
          <Button
        key={item}
        name={item}
        value={item}
        change ={(event)=> {
          setOther(false)
          setpercent(parseInt(event.target.value))
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
            label='Escolha um outro para guardar (em %): '
            min='1'
            max='100'
            change={(event)=> {
              setpercent(parseInt(event.target.value))
            }}
          />}
      <h2>Quanto tempo temos? </h2>
      <div className="time">
      <Campo
      nome='day'
      label='Dia Atual'
      min='1'
      max='31'
      change={(event)=> {
        setDay(event.target.value)}}
      />
      <Select
      nome='lastDay'
      label='Ultimo dia do mês : '
      change={(event)=> {
        setLastDay(event.target.value)}}
      />
      </div>
      {(day < 1 || day > 31) && <span>Favor inserir uma data correta</span>}
      <Link to='/results'>Veja o quanto economizar aqui aqui!</Link>
    </form>
  </section>
  );
};

export default Home;
