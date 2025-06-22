import {Component} from "react";
import "./Item.css"
import * as React from "react";

export interface Todo {
    id:number
    name:string
    done:boolean
}

interface ItemProps{
    todo:Todo
    checkedItem: (id:number,done:boolean)=>void
    delItem:(id:number)=>void
}


export default class Item extends Component<ItemProps>{


    handlerCheck = (id:number)=>{
        return (event:React.ChangeEvent<HTMLInputElement>)=>{
            const {checkedItem} = this.props
            const {checked} = event.currentTarget
            checkedItem(id,checked)
        }
    }

    clearTodo = (id:number)=>{
        return ()=>{
            const {delItem} = this.props
            delItem(id)
        }
    }


    render() {
        const {id,name,done} = this.props.todo

        return (
            <li className="todo-item">
                <label>
                    <input onChange={this.handlerCheck(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.clearTodo(id)} className="btn btn-danger" >删除</button>
            </li>
        )
    }
}


