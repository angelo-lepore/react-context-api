// Import
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">I nostri Prodotti</h1>
          <ProductList />
        </div>
      </main>
    </>
  );
}
