import { useState, createContext } from "react";

export const MyContext = createContext(null);

const AppContext = ({children}) => {

  const [store, setStore] = useState(
   { theme: 'light',
    email: "",
    tokenStore: null,
    quotesStore: []
   }
  );

  return (
    <MyContext.Provider value={{ store, setStore }}>
      {children}
    </MyContext.Provider>
  )
}

export default AppContext