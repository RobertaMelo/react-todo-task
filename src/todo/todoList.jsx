import React from 'react'
import IconButton from '../template/iconButton'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton mapstyle='success' icon='check' hide={todo.done}
                        onClick={() => props.markedAsDone(todo)}></IconButton>
                    <IconButton mapstyle='warning' icon='undo' hide={!todo.done}
                         onClick={() => props.markedAsPending(todo)}></IconButton>
                    <IconButton mapstyle='danger' icon='trash-o'
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default (TodoList)