import Index from './components/index'
import Couse from './components/Couse';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// functional component

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/course/:id/:course" exact component={Couse}/>
          <Route path="/signup" exact component={Signup} />
          <Route path="/login/:id" exact component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
