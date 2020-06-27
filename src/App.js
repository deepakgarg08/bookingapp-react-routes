import React from 'react';
import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom'
import MainPage from "./components/MainPage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
