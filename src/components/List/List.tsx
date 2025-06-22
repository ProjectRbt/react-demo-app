import {Component} from "react";
import Item, {type Todo} from "../Item/Item.tsx";
import "./List.css"

interface Props {
    todos:Todo[]
}

export default class List extends Component<Props> {
    render() {

        const {todos} = this.props

        return (
            <ul className="todo-main">
                {todos.map((item)=>{
                    return <Item key={item.id} todo={item}/>
                })}
            </ul>
        )
    }

}


