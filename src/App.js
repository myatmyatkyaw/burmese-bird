

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Birddetails from './Birddetails';
import Birdlist from './Birdlist';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/birds">
              <Birdlist />
          </Route>

          <Route path="/bird/:id">
              <Birddetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
