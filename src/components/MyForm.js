import React,{Component}  from 'react';

export default class MyFormns extends Component{

    state = {
        name : 'cddd',
        lastname : ''
    }

    _onSubmit = (e) => {
        e.preventDefault()
        alert('Enviado')
    }

    // _onChange = (e, key) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         [key] : e.target.value,
    //     });
        
    // }

    _onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({
            [key] : value
        });
        
    }

    render() {
        console.log('render')
        const props = this.props;

        return (
            <form onSubmit = {(e) => {this._onSubmit(e)}}>
                <label id='idnombre'>Nombre</label><br />
                <input 
                    type='text' 
                    name="name"
                    value={this.state.name} 
                    onChange={ (e) => {this._onChange(e)}}
                    required
                />
                <br />
                <label id='idapellido'>Apellido</label><br></br>
                <input 
                    type='text' 
                    name="lastname"
                    value={this.state.lastname} 
                    onChange = {(e) => {this._onChange(e)}}
                    required
                />
                <br />
                <input type='submit' value='Enviar' />
            </form>
        )
    }

}