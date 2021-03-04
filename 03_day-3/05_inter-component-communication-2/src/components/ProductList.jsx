import ProductCard from "./ProductCard";

export default function ProductList({ products, tittle, selectedProduct }) {

    function onProductSelected(product) {
        selectedProduct(product);
    }

    return (
        <div>
            <h2>{ tittle }</h2>
            <div className="products">
                {products.map(product => {
                    return <ProductCard
                        key={product.id}
                        {...product}
                        productSelected={() => onProductSelected(product)}
                    />
                })}
            </div>
        </div>
    );
}