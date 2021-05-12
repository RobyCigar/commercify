import {
	BrowserRouter as Router,
	Switch,
	Route,
  useRouteMatch,
  Redirect,
} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
 
// components
import MyProduct from './product/my_product'
import { userAction } from 'redux/actions'
import { TOKEN } from 'redux/constants'
import AddProduct from './product/add'
import NotFound from './404_not_found'
import ProductId from './product/_id'
import LandingPage from './welcome'
import Register from './register'
import Login from './login'
import Oauth from './oauth'
import Home from './home'

const Routes = ({handleUser}) => {
  const [cookies] = useCookies()

  console.log('fuck', cookies)

  useEffect(() => {
    async function fetch() {
      if(cookies.token) { 
        await handleUser(cookies.token)
      }
    }
    fetch();
  }, [cookies]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
   		<Router>
   			<Switch>
   				<Route exact path="/">
            <LandingPage/>
   				</Route>
          <Route path="/login">
            <LoginRoute/> 
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/home">
            <Home/>
          </PrivateRoute>
          <PrivateRoute path="/product">
            <ProductRoute/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
   			</Switch>
   		</Router>	
  )
}

const PrivateRoute = ({children, ...rest}) => {
  const [cookies] = useCookies()
  const userToken = useSelector(state => state.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if(cookies.token) {
      dispatch({type: TOKEN, payload: cookies.token })
    }
  }, [cookies]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookies.token ? (
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

const ProductRoute = () => {
  const { path } = useRouteMatch()
  
  return (
    <Switch>
      <Route exact path={`${path}/add`}>
        <AddProduct/>
      </Route>
      <Route path={`${path}/my-product`}>
        <MyProduct/>
      </Route>
      <Route path={`${path}/:id`}>
        <ProductId/>
      </Route>
    </Switch>
  )
}

const LoginRoute = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Login/>
      </Route>
      <Route path={`${path}/:token`}>
        <Oauth/>
      </Route>
    </Switch>
  )
}

export default connect(null, userAction.dispatch)(Routes);