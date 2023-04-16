import './Campo.css';


const Campo = ({name, label, min, max, change}) => {
    return ( 
        <div className='campo'>
            <label htmlFor={name}>{label}</label>
            <input 
            name='name'
            type="number" 
            required={true}
            min={min}
            max={max}
            onChange={change}
            />
        </div>
     );
}
 
export default Campo;