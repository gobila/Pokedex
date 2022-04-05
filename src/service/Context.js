/* eslint-disable no-unused-vars */
import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import apiConnect from './apiConnect';

const Context = createContext({
  name: 'asasa',

});
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserContextProvider({ children }) {
  // the value that will be given to the context
  const [pokeContext, SetpokeContext] = useState(0);

  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchUser = async () => {
      // this would usually be your own backend, or localStorage
      // for example
      try {
        // number os pokemon 897 (pokedex kalos)
        const data = await apiConnect.getAll(898, 0);
        const promises = data.results.map(async (item) => apiConnect.getPokemon(item.name));
        const results = await Promise.all(promises);
        SetpokeContext(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  // memoize the full context value
  const contextValue = useMemo(() => ({
    pokeContext,
  }), [pokeContext]);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserContextProvider };
export default Context;
