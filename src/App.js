

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Birddetails from './Birddetails';
import Birdlist from './Birdlist';
import Footer from './Footer';

// for animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <div className="App ">
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
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
