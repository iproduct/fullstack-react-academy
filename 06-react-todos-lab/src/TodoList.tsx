import React, { Component } from 'react'
import { Todo } from './todo'
import './TodoList.css';


export interface TodoListProps {
    todos: Todo[]
}

export default class TodoList extends Component<TodoListProps,{}> {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li>{todo.id}: {todo.title} - {todo.status} </li>
                ))}
            </ul>
        )
    }
}
