import './App.css';
import Header from './container/Header';
import Medium from './container/Medium';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Category from './pages/Category/Category';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Medium/>  */}
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
    </div>
  );
}

export default App;
