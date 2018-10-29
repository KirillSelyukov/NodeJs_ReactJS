import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';

const SurveyNew = () => <h1>SurveyNew</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
