export {useState} from 'react'

const BoxItem =({paragraf, text})=> {
    return (
        <div className="containner-flid">
            <h2>{paragraf} {text} </h2>
        </div>
    )
}

export default BoxItem