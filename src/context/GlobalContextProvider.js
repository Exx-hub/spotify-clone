import React, { createContext, useContext, useReducer } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children, reducer, initialState }) {
	// const [state, dispatch] = useReducer(reducer, initialState);
	// passed the reducer hook directly to the value
	return (
		<GlobalContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContextProvider;

export const useStateValue = () => useContext(GlobalContext);
