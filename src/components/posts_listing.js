import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,} from "../redux/actions/posts";
import ProductComponent from "./posts/posts";
import {connect} from 'react-redux';
const ProductPage = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

    
  
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent products={products} />
    </div>
  );
};

export default connect()(ProductPage);