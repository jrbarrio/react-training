function List(props) {

    function createList() {
        let productList = [];
        for (let product of props.products) {
            productList.push(<li>{product.name} - {product.category}</li>);
        }
        let result = <ul>
            {productList}
        </ul>;
        return result;
    }

    return createList();

}

export default List;