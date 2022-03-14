
export {useState} from 'react'

const Container =({title, name})=> {
    return (
        <div className="containner-flid">
            <h2>{title} {name} </h2>
        </div>
    )
}

export default Container