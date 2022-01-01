import './App.css';
import Home from "./pages/Home/Home"
import ListPage from './pages/List/ListPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/list-page" component={ListPage}/>
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
