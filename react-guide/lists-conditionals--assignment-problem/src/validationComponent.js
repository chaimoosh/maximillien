import React from 'react';

const validationComponent = (props) => {
    return (
        <div className="validationComponent">
            <p>{props.length}</p>
            <p>{props.longEnough}</p>
        </div>
    )
}

export default validationComponent;