// Import degli hook di React
import { useState, useEffect, createContext, useContext } from "react";

// Crea un nuovo contesto, che useremo per condividere i prodotti in tutta l'app
const ProductsContext = createContext();

// Componente Provider che fornisce i dati ai componenti figli
function ProductsProvider({ children }) {
  const urlProducts = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((data) => {
        console.log("Prodotti:", data);
        setProducts(data);
      });
  }, []);

  return (
    // Forniamo il valore del context a tutti i componenti figli
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Questa funzione è un custom hook
function useProductsProvider() {
  return useContext(ProductsContext);
}

// Esportiamo sia il provider che il custom hook per usarli in altri file
export { ProductsProvider, useProductsProvider };
