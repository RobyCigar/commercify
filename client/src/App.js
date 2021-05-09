import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import Routes from "./pages/route";
import store from "./redux/store";

export const UserCtx = createContext();

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
          <Routes />
      </Provider>
    </CookiesProvider>
  );
}

export default App;
