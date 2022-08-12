import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = () => {
	const [ productsState, setProductsState ] = useState();

	const filter = (typeOfDisease) => {
    const filterProducts = products.filter((product) => product.typeOfDisease == typeOfDisease);
    setProductsState(filterProducts);
  };

	return (
    <AppContext.Provider 
      value={{
       filter,
       products: productsState,
      }}
    >
      {/* {children} */}
    </AppContext.Provider>);
};

export const useAppContext = () => useContext(AppContext);
