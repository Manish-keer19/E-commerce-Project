// import React, { useState, useContext, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ProductContext from '../context/ProductContext';
// import Loading from '../Loading';
// import Navbar from './Navbar';

// function Detail() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { products, setProducts } = useContext(ProductContext);

//   useEffect(() => {
//     const selectedProduct = products ? products.find(item => item.id === parseInt(id)) : null;
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//     } else {
//       alert("Product not found");
//       navigate('/');
//     }
//   }, [id, products, navigate]);

//   const handleEdit = () => {
//     navigate('/edit', { state: { product } });
//   };

//   const handleDelete = () => {
//     const newProducts = products.filter(item => item.id !== parseInt(id));
//     setProducts(newProducts);
//     localStorage.setItem('products', JSON.stringify(newProducts));
//     navigate('/');
//   };

//   return (
//     <>
//       <Navbar />
//       {product ? (
//         <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white font-sans">
//           <div className="w-2/3 bg-gray-800 h-2/3 relative flex gap-10 rounded-lg p-6">
//             <div className="w-[100%] h-[100%]">
//               <img className="w-full h-full object-fill rounded-xl" src={product.images[0]} alt={product.title} />
//             </div>
//             <div className="flex flex-col p-6 m-2 italic leading-6 space-y-4">
//               <h4 className="text-3xl">Title: {product.title}</h4>
//               <h4 className="text-4xl">Price: ${product.price}</h4>
//               <h4 className="text-2xl">Category: {product.category.name}</h4>
//               <p className="text-lg">Description: {product.description}</p>
//               <div className="flex space-x-4 mt-4">
//                 <button
//                   onClick={handleEdit}
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Loading />
//       )}
//     </>
//   );
// }

// export default Detail;



import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import Loading from '../Loading';
import Navbar from './Navbar';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products, setProducts } = useContext(ProductContext);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const selectedProduct = products ? products.find(item => item.id === parseInt(id)) : null;
    if (selectedProduct) {
      setProduct(selectedProduct);
      setRating(selectedProduct.rating || 0);
    } else {
      alert("Product not found");
      navigate('/');
    }
  }, [id, products, navigate]);

  const handleEdit = () => {
    navigate('/edit', { state: { product } });
  };

  const handleDelete = () => {
    const newProducts = products.filter(item => item.id !== parseInt(id));
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
    navigate('/');
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    const updatedProduct = { ...product, rating: newRating };
    setProduct(updatedProduct);
    const updatedProducts = products.map(item => 
      item.id === parseInt(id) ? updatedProduct : item
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Navbar />
      {product ? (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center text-white font-sans">
          <div className="w-2/3 bg-gray-800 h-auto relative flex gap-10 rounded-lg p-6">
            <div className="w-[50%] h-[100%]">
              <img className="w-full h-full object-fill rounded-xl" src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex flex-col p-6 m-2 italic leading-6 space-y-4 w-[50%]">
              <h4 className="text-3xl">Title: {product.title}</h4>
              <h4 className="text-4xl">Price: ${product.price}</h4>
              <h4 className="text-2xl">Category: {product.category.name}</h4>
              <p className="text-lg">Description: {product.description}</p>
              <div className="mt-4">
                <h4 className="text-2xl">Rating:</h4>
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className={`text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      &#9733;
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Detail;
