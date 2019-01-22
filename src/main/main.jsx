import React from 'react'
import Menu from '../template/menu'
import Todo from '../todo/todo'
import '../template/custom.css'

export default props => (
    <div className="col-md-10 offset-md-1">
        <Menu />
        <Todo />
    </div>
)