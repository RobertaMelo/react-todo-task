import React, {Component} from 'react'
import axios from 'axios'

import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import PageHeader from '../template/pageHeader'

const URL = 'https://homolog.compufacil.com.br/rpc/v1/'
var config = {
    headers: {'challenge-token': '81dc9bdb52d04dc20036dbd8313ed055'}
};


export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
        this.markedAsDone = this.markedAsDone.bind(this)
        this.markedAsPending = this.markedAsPending.bind(this)
        this.state = { description: '', list: [] }
        this.refresh()
    }

    markedAsDone(todo) {
        axios.put(`${URL}challenge.put-task`, { ...todo, done: true }, config)
            .then(resp => this.refresh());
    }

    markedAsPending(todo) {
        axios.put(`${URL}challenge.put-task`, {...todo, done: "false" }, config)
        .then(resp => this.refresh());
    }

    refresh() {
        axios.get(`${URL}challenge.get-task`, config)
        .then(resp => this.setState({...this.state, description: '', list: resp.data}));
    }

    change(e) {
        this.setState({...this.state, description: e.target.value });
    }

    add() {
        const description = this.state.description;
        const done = false;
        axios.post(`${URL}challenge.post-task`, { description, done }, config)
            .then(resp => this.refresh());
    }

    remove(todo) {
        const ids = [todo.id];
        axios.delete(`${URL}challenge.delete-task`, {data: {ids}, headers: config.headers})
        .then(resp => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name='Register' small='Tasks'></PageHeader>
                <hr></hr>
                <TodoForm 
                    description={this.state.description} 
                    change={this.change}
                    add={this.add}
                />
                <TodoList 
                    list={this.state.list}
                    remove={this.remove}
                    markedAsDone={this.markedAsDone}
                    markedAsPending={this.markedAsPending}
                />
            </div>
        )
    }

    
}

        