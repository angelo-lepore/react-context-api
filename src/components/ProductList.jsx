// Import di ProductCard
import ProductCard from "./ProductCard";

// Importi dell'hook per accedere ai prodotti dal context
import { useProductsProvider } from "../contexts/ProductsContext";

// Componente che mostra la lista di tutti i prodotti
export default function ProductList() {
  // Usiamo il nostro custom hook per ottenere i prodotti dal context
  const { products } = useProductsProvider();

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            {/* Ogni prodotto viene passato come prop al componente ProductCard */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
