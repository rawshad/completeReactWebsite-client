import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <PrivateRoute path="/appointment"><Appointment/></PrivateRoute> */}
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
