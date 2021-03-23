import { createContext, useState } from 'react'
import Routes from './pages/route'

export const UserCtx = createContext()

function App() {
	const [user, setUser] = useState(false)
  	const value = { user, setUser }
  return (
    <>
    <UserCtx.Provider value={value}>
      <Routes/>
    </UserCtx.Provider>
    </>
  );
}

export default App;
