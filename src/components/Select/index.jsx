import './Select.css';

const Select = ({name, label, change}) => {
    const days = ['', '28', '29', '30', '31']
    return ( 
        <div className='Lista-suspensa'>
            <label htmlFor={name}>{label}</label>
            <select
             name='name'
             type="number" 
             required={true}
             onChange={change}
             >
                {days.map((day, i) =><option key={i} value={day}>{day}</option>)}

             </select>
        </div>
     );
}
 
export default Select;