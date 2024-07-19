import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import Navbar from './Navbar';
import Loading from '../Loading';

function Home() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log("Navigating to detail page...");
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />
      {products ? (
        <div className="main w-full min-h-screen bg-slate-200 ">
    
          <div className="box2 w-[100%] h-[100%] bg-[#212121] text-white flex flex-wrap gap-4 p-.5 py-10">
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="elems cursor-pointer w-[200px] h-[250px] border rounded flex border-slate-700 flex-col items-center gap-5"
              >
                <div className="img w-[100%] h-[70%]">
                  <img className='hover:scale-105 w-full h-full object-fill' src={item.images} alt={item.title} />
                </div>
                <p className='overflow-hidden text-xs text-center inline-block'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;


