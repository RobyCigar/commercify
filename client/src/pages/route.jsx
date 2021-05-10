import {
	BrowserRouter as Router,
	Switch,
	Route,
  useRouteMatch,
  Redirect,
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
import MyProduct from './product/my_product'

const Routes = ({handleUser}) => {
  const [cookies] = useCookies()

  useEffect(() => {
    if(cookies.token) { 
      handleUser(cookies.token)
    }
  }, [handleUser, cookies.token])

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
  const [cookie] = useCookies()

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


export default connect(null, userAction.dispatch)(Routes);