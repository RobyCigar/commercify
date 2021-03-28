import { createContext, useState } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import Routes from "./pages/route";

export const UserCtx = createContext();
const store = createStore();

function App() {
	const [user, setUser] = useState(false);
	const value = { user, setUser };
	return (
		<>
			<Provider store={store}>
				<UserCtx.Provider value={value}>
					<Routes />
				</UserCtx.Provider>
			</Provider>
		</>
	);
}

export default App;
