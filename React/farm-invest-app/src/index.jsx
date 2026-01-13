import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import App from "./app/App";
import "./styles/global.css";
import "leaflet/dist/leaflet.css"; // <--- ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТО

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom'; // Импортируем провайдер
// import { store } from './app/store';
// import { router } from './app/router'; //  конфиг из шага
// import './styles/global.css'; // Твои глобальные стили (сброс, шрифты)

// const root = createRoot(document.getElementById('root'));

// root.render(
//   <Provider store={store}>
//     {/* RouterProvider принимает наш объектный роутер */}
//     <RouterProvider router={router} />
//   </Provider>
// );
