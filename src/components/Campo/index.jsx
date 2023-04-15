import './Campo.css';


const Campo = ({name, label, register}) => {
    return ( 
        <div className='campo'>
            <label htmlFor={name}>{label}</label>
            <input 
            {...register(`${name}`)}
            type="number" 
            required='true'  />
        </div>
     );
}
 
export default Campo;