import {Component} from "react";
import Item from "../Item/Item.tsx";
import "./List.css"

export default class List extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ul>
        )
    }

}


