
import './button.css'

export const Button =({className, text, onClick, type})=> {
    
    return (
        <button className={className} onClick={onClick} type={type}>
            {text}
        </button>
    )
}