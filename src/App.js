import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './views/Home';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
          <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/home/edituser/:id" component={EditUser} />
               <Route exact path="/home/createuser" component={CreateUser} />
               <Route path='/' render={()=><NotFound/>}/>
          </Switch>
     </Router>
    </div>
  );
}

export default App;
