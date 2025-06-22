import {Component} from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./App.css"
import type {Todo} from "./components/Item/Item.tsx";
import List from "./components/List/List.tsx";

interface States {
    todos: Todo[]
}
interface AppProps {
    [key:string]:string
}

export default class App extends Component<AppProps, States> {


    state: States = {
        todos: this.loadTodos()

    }

    loadTodos(): Todo[] {
        try {
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [
                {id: 1, name: "吃饭", done: true},
                {id: 2, name: "睡觉", done: true},
                {id: 3, name: "学习", done: false},
            ];
        } catch (error) {
            console.error('Failed to load todos from localStorage', error);
            return [];
        }
    }

    // 保存 todos 到 localStorage
    saveTodos(todos: Todo[]) {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Failed to save todos to localStorage', error);
        }
    }

    // 每次 state 更新后自动保存
    componentDidUpdate(_prevProps: AppProps, prevState: States) {
        if (prevState.todos !== this.state.todos) {
            this.saveTodos(this.state.todos);
        }
    }

    addItem = (value:string)=>{
        const {todos} = this.state
        const item:Todo = {
            id: Date.now(),
            name: value,
            done: false
        }
        this.setState({todos:[item,...todos]})
    }

    setItemState = (id:number,dome:boolean)=>{
        const {todos} = this.state
        const newTodoList = todos.map((todo):Todo=>{
            if (todo.id === id) return {...todo,done:dome}
            return todo
        })
        this.setState({todos:newTodoList})
    }

    delItem = (id:number)=>{
        const {todos} = this.state
        const newTodoList = todos.filter((todo)=>{
            return todo.id !== id
        })
        this.setState({todos:newTodoList})
    }

    delSuccessItem = ()=>{
        const {todos} = this.state
        const newTodoList = todos.filter((todo)=>{
            return !todo.done
        })
        this.setState({todos:newTodoList})
    }

    setItemListState = (done:boolean)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }


    render() {
        const {todos} = this.state
        const successCount = todos.filter(todo => todo.done).length
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header setItem={this.addItem}/>
                    <List delItem={this.delItem} setItemState={this.setItemState} todos={todos}/>
                    <Footer setItemList={this.setItemListState} clearItem={this.delSuccessItem} length={todos.length} successCount={successCount} />
                </div>
            </div>
        )
    }
}



