import './App.css';
import { productos as products } from './data/productos';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [selectedProducts, setSelectedProducts] = useState([]);

  function onSelectedProduct(product) {
    const productCopy = [...selectedProducts];
    productCopy.push(product);
    setSelectedProducts(productCopy);
  }

  const productCategories = products.map(producto => producto.category);
  const categories = [...new Set(productCategories)]

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            { categories.map(category => (
              <ProductList
                key={category}
                titulo={category.toUpperCase()}
                products={products.filter(product => product.category === category)}
                selectedProduct={onSelectedProduct}
              />
            )) }
          </div>
          <div className="col-4">
            <Cart products={selectedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
