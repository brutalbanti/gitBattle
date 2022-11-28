import React, { Component } from "react";

class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
        console.log('submit');
    }

    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input
                    type="text"
                    placeholder="GitHub Username"
                    id="username"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}
                >
                    Submit
                </button>
            </form>
        )
    }
}

export default PlayerInput;