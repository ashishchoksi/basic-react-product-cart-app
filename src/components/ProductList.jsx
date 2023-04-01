import React from "react";
import Product from "./Product";

// Function based Component
export default function ProductList(props) {
  return props.productList?.length > 0 ? props.productList.map((product, index) => {
    return (
      // sending index to identity click
      // passing function reference to call onClick
      <Product
        product={product}
        key={index}
        index={index}
        incrementQty={props.incrementQty}
        decrementQty={props.decrementQty}
        removeProduct={props.removeProduct}
      />
    );
  }) : <h1>No Product Found!!</h1>;
}
