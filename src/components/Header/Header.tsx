import {Component} from "react";
import "./Header.css"
import * as React from "react";


interface HeaderProps {
    setItem:(msg:string)=>void
}


export default class Header extends Component<HeaderProps> {

    handlerKeyUp = (event:React.KeyboardEvent<HTMLInputElement>)=>{

        const {key,currentTarget} = event
        const {setItem} = this.props

        if (key !== "Enter") return

        if (currentTarget.value.trim() === ""){
            alert("任务不可为空")
            return
        }
        setItem(currentTarget.value)
        currentTarget.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车确认"/>
            </div>
        )
    }

}





