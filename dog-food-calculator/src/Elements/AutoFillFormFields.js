import React from 'react';

const AutoFillFormField = (props) =>{
    return(
        <div>
            {props.title? <p className="dropdown-title">{props.title}</p> : null}
            <div className={`input-field ${props.selected? "selected" : "placeholder"}`} onClick={()=>props.select()}>
                <h1 className="field">{props.selected || props.placeholder || ""}</h1>
                <span className="down-arrow">▾</span>
            </div>
        </div>
    )
}

export default AutoFillFormField;