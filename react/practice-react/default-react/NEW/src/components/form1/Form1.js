import React, { Component } from 'react'


class Form1 extends Component {
    state = { 
        qwery: ""
     }

    handlerSubmitForm = () => {}
    handlerChangeValue = () => {}

    render() {
        return (
            <form onSubmit={this.handlerSubmitForm}>

                <input onChange={this.handlerChangeValue} type="text"/>
            </form>
        );
    }
}

export default Form1;