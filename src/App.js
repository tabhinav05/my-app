import React from "react";
import ProductListing from "./components/posts_listing";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="wrap">
        <Header />
        <ProductListing />
    </div>
  );
}

export default App;