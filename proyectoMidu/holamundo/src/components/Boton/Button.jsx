
import './Button.css';
import { FcLike } from "react-icons/fc";



// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
    return (
        <>
            <button className='boton btn btn-primary m-2 '>{text} <FcLike /> </button>
        </>
        
    );
}



export default Button;
