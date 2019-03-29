import React from 'react';

const FormField = (props) =>{
    return(
        <div className="form-wrapper">
            {props.title? <p className="dropdown-title">{props.title}</p> : null}
            <div className={`input-field ${props.selected? "selected" : "placeholder"}`} onClick={props.selectable? ()=>props.select() : null}>
                <h1 className="field">{props.selected || props.placeholder || ""}</h1>
                {props.selectable? <span className="down-arrow">▾</span> : null}
            </div>
        </div>
    )
}

export default FormField;