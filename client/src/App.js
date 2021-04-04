import { createContext, useState } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import thunk from "redux-thunk";
import Routes from "./pages/route";
import store from "./redux/store";

export const UserCtx = createContext();

function App() {
  const [user, setUser] = useState(false);
  const value = { user, setUser };
  return (
    <CookiesProvider>
      <Provider store={store}>
        <UserCtx.Provider value={value}>
          <Routes />
        </UserCtx.Provider>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
