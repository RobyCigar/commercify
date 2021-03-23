import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import LandingPage from './welcome'
import Login from './login'
import Register from './register'
import Home from './home'

const Routes = (props) => {
  return (
   		<Router>
   			<Switch>
   				<Route exact path="/">
            <LandingPage/>
   				</Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
   			</Switch>
   		</Router>	
  )
}

export default Routes;