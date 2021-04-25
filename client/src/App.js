import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import Routes from "./pages/route";
import store from "./redux/store";

export const UserCtx = createContext();

function App() {
  const [user, setUser] = useState(false);
  const value = { user, setUser };
  console.log(process.env)
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
