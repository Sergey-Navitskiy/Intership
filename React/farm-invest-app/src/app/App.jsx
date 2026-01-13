// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "../pages/Home";
// import Locations from "../pages/Locations";
// import Login from "../pages/Login";

// //  Layout
// const Layout = ({ children }) => (
//   <div>
//     <header
//       style={{
//         padding: "20px",
//         borderBottom: "1px solid #ccc",
//         display: "flex",
//         gap: "20px",
//       }}
//     >
//       <Link to="/">Home</Link>
//       <Link to="/locations">Locations</Link>
//       <Link to="/login">Login</Link>
//     </header>
//     <main>{children}</main>
//   </div>
// );

// const App = () => {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/locations" element={<Locations />} />
//         <Route path="/login" element={<Login />} />
//
//         <Route path="*" element={<div>Page not found</div>} />
//       </Routes>
//     </Layout>
//   );
// };

// export default App;
// src/app/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"; // Импортируем твой новый файл!
import Home from "../pages/Home";
import Locations from "../pages/Locations";
import Login from "../pages/Login";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="locations" element={<Locations />} />

        <Route path="shop" element={<Shop />} />

        <Route path="login" element={<Login />} />

        {/* Страница 404 */}
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
