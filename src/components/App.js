import { SignUp }from "./Auth/SignUp";
import { Container } from "react-bootstrap"
import {AuthProvider} from "./Contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Dashboard} from "./Dashboard"
import {Login} from "./Auth/Login"
import PrivateRoute from "./PrivateRoute"
import {ForgotPassword} from "./Auth/ForgotPassword"


function App() {
  return (

  
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>

        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
          </Router>
        </div>

      </Container>
    


  );
}

export default App;
