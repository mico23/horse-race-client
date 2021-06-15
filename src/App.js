import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Pages
import login from './pages/login';
import signup from './pages/signup';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

axios.defaults.baseURL = 'https://www.students.cs.ubc.ca/~schung53/horse-race-api';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
