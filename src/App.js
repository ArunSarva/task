import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import main from './Components/main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="" component={main}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
