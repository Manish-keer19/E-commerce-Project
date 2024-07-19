import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductContext from '../context/ProductContext';
import Navbar from './Navbar';

function Create() {
    const navigate = useNavigate();
    const { products, setProducts } = useContext(ProductContext);

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handlerAdd = () => {
        // Validation
        if (title.length < 4 || description.length < 4 || category.length < 4 || image.length < 4) {
            setTitle("");
            setImage("");
            setDescription("");
            setCategory("");
            alert("All fields must have at least 4 characters.");
            return;
        }

        // Create new product object
        const newProduct = {
            id: nanoid(),
            title: title,
            description: description,
            images: [image],
            category: category,
        };

        // Update products state with the new product
        setProducts([...products, newProduct]);

        // Update localStorage
        localStorage.setItem('products', JSON.stringify([...products, newProduct]));

        // Clear input fields
        setTitle("");
        setImage("");
        setDescription("");
        setCategory("");

        // Navigate back to home page
        navigate("/");
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white font-sans">
                <div className="w-3/5 bg-gray-800 p-6 rounded-lg">
                    <h1 className="text-2xl mb-4">Add New Product</h1>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-white mb-1">Image URL:</label>
                        <input
                            type="url"
                            id="image"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            placeholder="Enter image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-white mb-1">Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-white mb-1">Category:</label>
                        <input
                            type="text"
                            id="category"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            placeholder="Enter category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-white mb-1">Description:</label>
                        <textarea
                            id="description"
                            className="w-full px-3 py-2 bg-gray-700 rounded"
                            rows="4"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={handlerAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
}

export default Create;
