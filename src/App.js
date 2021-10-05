import './App.css';
import Header from './container/Header';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Category from './pages/Category/Category';
import Footer from './container/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
      
          <Route path="/:category" exact>
            <Category />
          </Route>

        </Switch>
      </Router>
     <Footer />
    </div>
  );
}

export default App;
