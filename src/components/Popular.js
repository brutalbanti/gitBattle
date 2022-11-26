import React from "react";
import SelectedLanguage from "./SelectedLanguage";

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(event) {
        if (this.state.selectedLanguage !== event.target.innerText) { // если выбранный язык не соответствует кликнутом, только тогда ...
            this.setState({ selectedLanguage: event.target.innerText }) // ... мы изменяем state
        }
    }
    render() {
        console.log('render')
        return (
            <SelectedLanguage
                selectedLanguage={this.state.selectedLanguage}
                updateLanguage={this.updateLanguage}
            />
        )
    }
}

export default Popular;
