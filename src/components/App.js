import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Battle from '../pages/Battle/Battle';
import Popular from '../pages/Popular/Popular';
import Nav from './Nav';
import Results from '../pages/Battle/Results';



class App extends Component {
    render() {
        return (
            <Router>
                <main className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/popular" component={Popular} />
                        <Route exact path="/battle" component={Battle} />
                        <Route exact path="/battle/results" component={Results} />
                        <Route render={() => <p>Page not found</p>} />
                    </Switch>
                </main>
            </Router>
        )
    }
}

export default App;