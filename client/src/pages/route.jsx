import {
	BrowserRouter as Router,
	Switch,
	Route,
  useRouteMatch,
  Redirect,
  useParams
} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { connect } from 'react-redux'


// components
import { userAction } from 'redux/actions'
import LandingPage from './welcome'
import Login from './login'
import Register from './register'
import Home from './home'
import AddProduct from './product/add'
import ProductId from './product/_id'
import NotFound from './404_not_found'

const Routes = ({handleUser}) => {
  const [cookies, setCookie] = useCookies()

  useEffect(() => {
    console.log('here')
    if(cookies.token) { 
      handleUser(cookies.token)
    }
  }, [handleUser])

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
          <Route path="*">
            <NotFound/>
          </Route>
   			</Switch>
   		</Router>	
  )
}

const PrivateRoute = ({children, ...rest}) => {
  const [cookie, setCookie] = useCookies()

  console.log("here1", cookie.token, cookie)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookie.token ? (
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
  const slug = useParams()

  return (
    <Switch>
      <Route exact path={`${path}/add`}>
        <AddProduct/>
      </Route>
      <Route path={`${path}/:id`}>
        <ProductId/>
      </Route>
    </Switch>
  )
}


export default connect(null, userAction.dispatch)(Routes);