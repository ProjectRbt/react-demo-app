import {Component} from "react";
import Item, {type Todo} from "../Item/Item.tsx";
import "./List.css"

interface Props {
    todos:Todo[],
    setItemState:(id:number,done:boolean)=>void
    delItem:(id:number)=>void
}

export default class List extends Component<Props> {
    render() {

        const {todos,setItemState,delItem} = this.props

        return (
            <ul className="todo-main">
                {todos.map((item)=>{
                    return <Item delItem={delItem} checkedItem={setItemState} key={item.id} todo={item}/>
                })}
            </ul>
        )
    }

}


