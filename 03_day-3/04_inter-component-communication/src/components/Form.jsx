import { useState } from 'react';

function Form(props) {

    const [productState, setProductState] = useState({
        name: '',
        category: 'carniceria'
    });

    function handleChange(event, field) {
        setProductState({
            ...productState,
            [field]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.taskCreated(productState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputProduct">Product</label>
                    <input
                        type="text"
                        name=""
                        className="form-control"
                        id="inputProduct"
                        value={productState.name}
                        onChange={(event) => handleChange(event, 'name')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectCategory">Category</label>
                    <select
                        name="category"
                        id="selectCategory"
                        className="form-control"
                        value={productState.category}
                        onChange={(event) => handleChange(event, 'category')}
                    >
                        <option value="fish">Fish</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <input type="submit" value="Send" className="btn btn-block btn-info" />
            </form>
        </div>
    );
}

export default Form;