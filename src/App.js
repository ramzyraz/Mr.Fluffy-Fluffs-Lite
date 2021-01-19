import NavBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/register';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/recipes' component={Recipes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
