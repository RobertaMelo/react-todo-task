import React from 'react'
import IconButton from '../template/iconButton'


export default props => (
    <div role='form' className='todoForm'>
        <div className="row">
            <div className="col-9 offset-md-1">
                <input id='description' className='form-control'
                    placeholder='Add description task'
                    onChange={props.change}
                    value={props.description}>
                </input>
            </div>
            <div className="col-2">
                <IconButton mapstyle='primary' icon='plus'
                    onClick={props.add}></IconButton>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>        
)


