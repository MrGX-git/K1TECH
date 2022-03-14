
import { useState } from 'react'

import './dropDown.css'

export const DropDown =({closedTitle, opendTitle, isOpend=true, children, className})=> {
    const [opend, setOpend] = useState(isOpend)
    return (
        <div className={`shadow ${className}`}>
          <h2 
            className='text-muted fa-2' 
            style={{
                cursor: "pointer"
            }}
            onClick={() => setOpend(!opend)}
          >
              {opend ? opendTitle : closedTitle}
          </h2>
          <div className="drop-down">{opend ? children : null}</div>
        </div>
    )
}