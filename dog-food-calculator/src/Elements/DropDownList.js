import React from 'react';

const DropDownList = (props) =>{
    return(
        <div className="dropdown-list">
            {props.hasSubCategory? Object.keys(props.list).map((data)=>{
                return (<div className="list" key={data}>
                    {props.hasSubCategory? <h1 className="category">{data}</h1> : null}
                    <SubList list={props.list[data]} select={props.selectItem}/>
                </div>)
            }) :<SubList list={props.list} select={props.selectItem}/> }
        </div>
    )
}

const SubList = (props) =>{
    return (
        <div className="list-container">
            {props.list.map((data)=>{
                return <h1 key={data.name} className="row-text" onClick={()=>props.select(data)}>{data.name}</h1>
            })}
        </div>
    )
}

export default DropDownList;