import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export default function TodoItems(){
    const [item, setItem] = useState({});
    let {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3001/api/todo/${id}`,{method : 'POST'})
            .then(res => res.json())
            .then(({todoItem})=>setItem(todoItem));
    },[]);

    return(
        <table className='todoItem'>
            <tr><th className="tableHead" colSpan={2}>Todo Details</th></tr>
            <tr>
                <th>Todo</th>
                <td>{item.text}</td>
            </tr>
            <tr>
            <th>Author</th>
                <td>{item.author}</td>
            </tr>
            <tr>
                <th>Location</th>
                <td>{item.location}</td>
            </tr>
            <tr>
                <th>Priority</th>
                <td>{item.priority}</td>
            </tr>
        </table>
    );

}