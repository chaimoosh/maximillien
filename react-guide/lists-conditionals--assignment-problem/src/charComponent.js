import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        //text-align: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    return (
      <div className="CharComponent" style={style} onClick={props.clicked}>
        <p>{props.letter}</p>
      </div>
    )
}

export default charComponent;