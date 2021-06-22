import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users'
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route 
            exact 
            path="/users/:id" 
            render={ (props) => <Users {...props} greetingMessage="Good Morning" />} 
          />
          <Route 
            exact
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username: 'joao', password: '1234' } } />
            )}
          />
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;