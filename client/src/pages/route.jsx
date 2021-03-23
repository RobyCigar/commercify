import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import LandingPage from './landing-page'
import Login from './login'
import Register from './register'

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
   			</Switch>
   		</Router>	
  )
}

export default Routes;