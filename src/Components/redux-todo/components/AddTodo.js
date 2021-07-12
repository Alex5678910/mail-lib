import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {

        state = {
            input: ""
        }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {                   //ментод добовляет дело
        if(this.state.input.length){
            this.props.addTodo(this.state.input) // mapDispatchToProps
            this.setState({ input: "" })
        }
    };

    onKeyPress = e => {                       //ментод добовляет дело
        if (e.charCode === 13 && this.state.input.length) {
            this.handleAddTodo()
        }
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                    onKeyPress={this.onKeyPress}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(null,{ addTodo })(AddTodo);
