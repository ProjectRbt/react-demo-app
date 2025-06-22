import {Component} from "react";
import "./Item.css"

export interface Todo {
    id:number
    name:string
    done:boolean
}

interface ItemProps{
    todo:Todo
}


export default class Item extends Component<ItemProps>{
    render() {

        const {todo} = this.props


        return (
            <li className="todo-item">
                <label>
                    <input type="checkbox" defaultChecked={todo.done}/>
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" >删除</button>
            </li>
        )
    }
}


