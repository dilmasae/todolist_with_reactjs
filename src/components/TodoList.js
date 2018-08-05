import React,{Component}  from 'react';

export default class TodoList extends Component{

    state = {
        name : '',
        todos: []
    }

    _onSubmit = (e) =>{
        e.preventDefault();

        let todos = [...this.state.todos];
        todos.push(this.state.name)
        
        this.setState({
            name: '',
            todos
        })
    }

    _onChange = (e) =>{
        const value = e.target.value;

        this.setState({
            name : value
        });
    }

    _renderContent = (e) => {
        
        if(this.state.todos.length == 0) {
            return (
                <div>
                    La lista está vacia
                </div>
            )
        }

        let todos = this.state.todos.map((todo, i) => {
            return(
                <li key={i}>
                    {todo}
                    <button 
                        className="ml-5 btn btn-sm btn-danger"
                        onClick={()=> this._removeTodo(i)}
                    >
                        Eliminar
                    </button>
                </li>
            )
        })

        return(
           
            <ul>
                {todos}
            </ul>
        )

    }

    _removeTodo = (i)=>{
        let todos = this.state.todos.filter((todo, index) => {
            return(index != i)
        })
        this.setState({
            todos
        })
    }

    render(){
        return(

            <div className="container mt-5">

                <form onSubmit = {(e) => {this._onSubmit(e)}}>
                    <input
                        className="form-group" 
                        type="text"
                        placeholder="Escribe tu todo" 
                        name="name"
                        value={this.state.name}
                        onChange = {(e) => {this._onChange(e)}}
                        required
                    />
                    <input type="submit" className="btn btn-sm btn-primary" />
                </form>

                <div className="mt-3">
                    {this._renderContent()}

                </div>

            </div>

        )
    }
}