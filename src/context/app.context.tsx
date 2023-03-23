import { createContext, Dispatch, SetStateAction, useContext, useState, PropsWithChildren } from 'react';

export interface IAppContext {
	pinStorage: string,
	setPinStorage: Dispatch<SetStateAction<string>>,
}

const AppContext = createContext<IAppContext>({
	pinStorage: '',
	setPinStorage: function (value: SetStateAction<string>): void {
		throw new Error('Function not implemented.');
	}
});

export const AppContextProvider = ({pinStorage, children }: PropsWithChildren<IAppContext>) => {
const [pinStorageState, setPinStorageState] = useState<string>(pinStorage);

	return (
		<AppContext.Provider
			value={{
				pinStorage: pinStorageState,
				setPinStorage: setPinStorageState,
			}}
		>
		{children}
		</AppContext.Provider>
	)
};

export const useAppContext = () => useContext(AppContext);
