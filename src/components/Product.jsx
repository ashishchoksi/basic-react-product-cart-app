import React from "react";

export default function Product(props) {
  return (
    <>
      <div className="row mt-4">
        <div className="col-5">
          <h2>
            {props.product.name} ₹
            <span className="badge bg-secondary">{props.product.price}</span>
          </h2>
        </div>
        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.decrementQty(props.index)}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.qty}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.incrementQty(props.index)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">{props.product.qty * props.product.price}</div>
        <button
          className="col-2 btn btn-danger"
          onClick={() => props.removeProduct(props.index)}
        >
          delete
        </button>
      </div>
    </>
  );
}
