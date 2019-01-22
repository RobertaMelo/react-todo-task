import React from 'react'

export default props => (
    <div className="col-3">
        <br></br>
        <header className='page-header'>
            <h2>{props.name} <small>{props.small}</small></h2>
        </header>
    </div>
)