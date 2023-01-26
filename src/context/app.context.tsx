import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

export interface IAppContext {
	counter?: number,
	setCounter?: Dispatch<SetStateAction<number>>,
}

const AppContext = createContext<IAppContext>({ counter: 0});

export const AppContextProvider = ({ children }) => {
	const [counter, setCounter] = useState<number>(0);


	return (
		<AppContext.Provider
			value={{
				counter,
				setCounter,
			}}
		>
		{children}
		</AppContext.Provider>
	)
};

export const useAppContext = () => useContext(AppContext);
