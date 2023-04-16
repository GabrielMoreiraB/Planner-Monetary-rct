

const Button = ({name,value, change}) => {
    return ( 
    <input 
    className="button"
    type="button" 
    value={value} 
    name={name}
    onClick={change}
    /> 
    );
}
 
export default Button;