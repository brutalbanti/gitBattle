import React, { Fragment } from "react";
import SelectedLanguage from "./SelectedLanguage";
import RepoGrid from "./RepoGrid";
import { getPopularRepos } from "../../api/getPopularRepos";

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
       this.getPopularReposHandler(this.state.selectedLanguage)
    }

    updateLanguage(event) {
        if (this.state.selectedLanguage !== event.target.innerText) { // если выбранный язык не соответствует кликнутом, только тогда ...
            this.setState({ selectedLanguage: event.target.innerText, repos: null }) // ... мы изменяем state
            this.getPopularReposHandler(event.target.innerText);
        }
    }

    getPopularReposHandler(selectedLanguage) {
        getPopularRepos(selectedLanguage)
            .then(repos => this.setState({ repos }))
            .catch(error => console.error(error));
    }

    render() {
        const { selectedLanguage, repos } = this.state;
        return (
            <Fragment>
                <SelectedLanguage
                    selectedLanguage={selectedLanguage}
                    updateLanguage={this.updateLanguage}
                />
                {repos ? <RepoGrid repos={repos} /> : <p className="loading">Loading...</p>} {/* если repos сущевствует - показывай мне это, если нет, показывай Loading */}
            </Fragment>
        )
    }
}

export default Popular;
