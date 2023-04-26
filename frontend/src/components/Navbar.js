// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// //  import Logo from './assets/images/Vector.svg';

// const Navbar = () => {
//   return (
//     <div className='navbar d-flex'>
//       <div id='navbar' className='d-flex w-100 space-between px-2 '>
//         {/* <div className='d-flex'>
//           <img width='120px' className='mx-3 m' src={Logo} alt='..' />

//         </div> */}
//         <div>
//           <div className='d-flex'>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/'
//               >
//                 Home
//               </Link>
//             </div>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/tools'
//               >
//                 About Us
//               </Link>
//             </div>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/'
//               >
//                Services
//               </Link>
//             </div>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/sign-up'
//               >
//                 SignUp
//               </Link>
//             </div>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/budget'
//               >
//                 Budget
//               </Link>
//             </div>
//             <div className='mx-3'>
//               <Link
//                 style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
//                 className='text-dark text-decoration-none h6'
//                 to='/'
//               >
//                 Contact Us
//               </Link>
//             </div>
//             <div className='' id='google_translate_element'></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import GoogleTranslateElement from "./GoogleTranslateElement";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="/">HOME</a>
        <a href="#services">ABOUT US</a>
        <a href="#services">SERVICES</a>
        <Link to="/budget">
          <a href="#budget">BUDGET</a>
        </Link>
        <a href="#contact">CONTACT US</a>
        <Link to="/sign-up">
          <a href="#signup">REGISTER</a>
        </Link>
      </div>
      <div>
        <GoogleTranslateElement />
      </div>
    </div>
  );
}

export default Navbar;
