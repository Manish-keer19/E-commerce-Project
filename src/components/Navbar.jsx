// // Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4" >
//       <div className="container  flex  items-center  ">
//         <div className="text-xl font-bold">Add a product</div>
//         <ul className="flex items-start">
//           <li>
//             <Link to="/" className="hover:text-gray-300 text-3xl">Home</Link>
//           </li>
//           {/* Add more navbar items as needed */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-start gap-[5vw] items-center">
        <div className="text-xl font-bold rounded border p-2 hover:bg-[#151414]">
          <Link to="/create">Add Your Product</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300 text-lg">Home</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 