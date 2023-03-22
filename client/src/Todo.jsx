import React from 'react';
import './Todo.css';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Todo(){
    const [todo, setTodo] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3001/api/todo').then(res => res.json()).then(({todoItems})=>setTodo(todoItems));
    },[]);
    return (
        <table className='todo'>
            <tr className='tableHead'>
                <th>Todo</th>
                <th>Button</th>
            </tr>
            {todo.map(({_id,text}) => <tr key={`id-${_id}-text-${text}`}>
                <td>{text}</td>
                <td><Link className='view' to={`/todo/${_id}`}>View</Link></td>
            </tr>)}
        </table>
    );
} 