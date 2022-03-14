
import './textInput.css'

export const TextInput =({value, onChange, placeholder})=> {
    const id = Math.random().toString()
    return (
      <div className="input-group mb-3">
        <input 
          name='filterTerm'
          type="text" 
          className="form-control" 
          placeholder={placeholder}
          id={id} 
          value={value}
          onChange={onChange}
        />
      </div>
    )
}