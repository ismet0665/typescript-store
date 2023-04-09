import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Flip, ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen text-center">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;
