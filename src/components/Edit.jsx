import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import Navbar from './Navbar';
function EditProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};

    const [title, setTitle] = useState(product?.title || '');
    const [price, setPrice] = useState(product?.price || '');
    const [description, setDescription] = useState(product?.description || '');
    const [category, setCategory] = useState(product?.category || '');


    const { products, setProducts } = useContext(ProductContext);


    function updateproducts(id) {

        console.log(products[id].title)
        products[id].title = title;
        products[id].price = price;
        products[id].category = category;
        products[id].description = description;


    }


    const handleSave = (id) => {

        let index = products.findIndex((item) => item.id == id);
        console.log(id);
        updateproducts(index);
        console.log(products)
        setProducts(products);

        localStorage.setItem('products', JSON.stringify(products));

        navigate(`/detail/${id}`)
    };







    return (
        <>

            <Navbar />
            <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white font-sans">
                <div className="w-3/5 bg-gray-800 p-6 rounded-lg">
                    <h1 className="text-4xl mb-6">Edit Product</h1>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-lg font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 text-black rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                id="price"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full p-2 text-black rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <input
                                id="category"
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-2 text-black rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 text-black rounded"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            onClick={() => handleSave(product.id)}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  ml-[90%]"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProduct;








