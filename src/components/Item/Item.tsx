import {Component} from "react";
import "./Item.css"


export default class Item extends Component{
    render() {
        return (
            <li className="todo-item">
                <label>
                    <input type="checkbox"/>
                    <span>中华人们共和国</span>
                </label>
                <button className="btn btn-danger" >删除</button>
            </li>
        )
    }
}


