import {Component} from "react";
import "./Footer.css"
import * as React from "react";

interface FooterProps {
    successCount:number
    length:number
    clearItem:()=>void

    setItemList:(done:boolean)=>void
}

export default class Footer extends Component<FooterProps>{


    handlerChecked= (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {setItemList} = this.props
        const {checked} = event.currentTarget
        setItemList(checked)
    }

    deleteItem = ()=>{
        const {clearItem} = this.props
        clearItem()
    }

    render() {

        const {successCount,length} = this.props

        return(
            <div className="todo-footer">
                <input onChange={this.handlerChecked} checked={successCount === length && length !== 0} type="checkbox"/>
                <span className="content">
                    <span>已完成{successCount}</span> / 全部{length}
                </span>
                <button onClick={this.deleteItem} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

}





