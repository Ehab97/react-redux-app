import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './views/Home';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
     <Router>
          <Switch>
               <Route exact path='/' component={Login} />
               <Route exact path="/home" component={Home} />
               <Route exact path="/home/edituser/:id" component={EditUser} />
               <Route exact path="/home/createuser" component={CreateUser} />
               <Route path='/' render={()=><div>404</div>}/>
          </Switch>
     </Router>
    </div>
  );
}

export default App;
