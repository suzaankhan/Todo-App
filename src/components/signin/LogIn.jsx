// import React from "react";
// import "./login.css";

// const LogIn = () => {
//   return (
//     <div className="login">
//       <div className="container">
//         <div className="row">
//         <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
//             <h1 className="text-center login-heading">
//                 Login
//             </h1>
//           </div>
//           <div className="col-lg-8 column d-flex justify-content-center align-items-center">
//             <div className="d-flex flex-column w-100 p-5 form-login">
//                 <input type="email" placeholder="Enter email" className="p-2 my-3" name="email"/>
//                 <input type="password" placeholder="Enter password" className="p-2 my-3" name="password"/>
//                 <button className="btn bg-danger login-btn">
//                     Login
//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

import React from "react";
import "./login.css";

const LogIn = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          {/* Right column with form */}
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5 form-login">
              {/* Mobile-specific heading */}
              <h1 className="text-center login-heading-for-mob">Login</h1>
              <input
                type="email"
                placeholder="Enter email"
                className="p-2 my-3"
                name="email"
              />
              <input
                type="password"
                placeholder="Enter password"
                className="p-2 my-3"
                name="password"
              />
              <button className="btn bg-danger login-btn">Login</button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <h1 className="text-center login-heading">Login</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
