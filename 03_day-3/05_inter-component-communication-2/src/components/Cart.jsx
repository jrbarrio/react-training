export default function Cart({ products: products }) {

    function getTotal() {
        let result = 0;
        for (let product of products) {
            result += product.price;
        }
        return result;
    }

    return (
        <div className="cart">
            <p>TOTAL: {getTotal()}</p>
            <ul className="list-group">
                {products.map(product => (
                    <li className="list-group-item">{product.name} - {product.price}€</li>
                ))}
            </ul>
        </div>
    );
}