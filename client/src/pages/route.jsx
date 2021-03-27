import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
  Redirect
} from 'react-router-dom'
import { useContext } from 'react'
import { UserCtx } from '../App'
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
          <PrivateRoute path="/home">
            <Home/>
          </PrivateRoute>


   			</Switch>
   		</Router>	
  )
}

const PrivateRoute = ({children, ...rest}) => {
  let {user} = useContext(UserCtx)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user || document.cookie ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default Routes;