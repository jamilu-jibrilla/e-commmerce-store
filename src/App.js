import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './screens/home'
import Footer from './components/footer';
import Shop from './screens/shop';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/detail">

        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
