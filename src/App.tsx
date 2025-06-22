import {Component} from "react";
import Header from "./components/Header/Header.tsx";
import List from "./components/List/List.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./App.css"


export default class App extends Component{
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        )
    }
}



