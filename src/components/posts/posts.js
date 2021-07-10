import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/posts";
import {connect} from 'react-redux';
import './posts.css'

const ProductComponent = (props) => {
  const dispatch = useDispatch();

  const deleteProducts = id => {
    console.log(id);
    const pro  = props.products;
    pro.splice(id, 1);
    console.log(pro);
    dispatch(setProducts(props.products));
  }

  const renderList = props.products.map((product,index) => {
    const { id, title, body } = product;
    return (
      <div className="box" key={index}>
          <div className=" bx-1 ">
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{body}</div>
              </div>
              <button className="btn" onClick={() => deleteProducts(index) } > delete </button>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

export default connect(mapStateToProps)(ProductComponent);