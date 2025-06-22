import {Component} from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./App.css"
import type {Todo} from "./components/Item/Item.tsx";
import List from "./components/List/List.tsx";

interface States {
    todos: Todo[]
}

export default class App extends Component<{}, States> {


    state: States = {
        todos: [
            {id: 1, name: "吃饭", done: true},
            {id: 2, name: "睡觉", done: true},
            {id: 3, name: "学习", done: false},
            {id: 4, name: "学习", done: false},
        ]

    }


    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}



