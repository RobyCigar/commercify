import {
	BrowserRouter as Router,
	Switch,
	Route,
  useRouteMatch,
  Redirect
} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import { UserCtx } from '../App'
import LandingPage from './welcome'
import Login from './login'
import Register from './register'
import Home from './home'
import AddProduct from './product/add'
import Shit from './shit'

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
          <PrivateRoute path="/product">
            <Product/>
          </PrivateRoute>
          <Route path="/shit">
            <Shit/>
          </Route>
   			</Switch>
   		</Router>	
  )
}

const PrivateRoute = ({children, ...rest}) => {
  const {user, setUser} = useContext(UserCtx)
  const [cookie, setCookie] = useCookies()

  console.log('ini cookieeeee', cookie )
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user  ? (
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

const Product = () => {
  const { path, url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${path}/add`}>
        <AddProduct/>
      </Route>
    </Switch>
  )
}


export default Routes;