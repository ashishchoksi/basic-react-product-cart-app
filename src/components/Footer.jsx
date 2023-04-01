import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="row fixed-bottom">
        <button className="col-3 btn btn-danger" onClick={() => props.reset()}>
          Reset
        </button>
        <div className="col-6 bg-dark text-light">
          Amount: {props.totalAmount}
        </div>
        <button className="col-3 btn btn-primary">Pay Now</button>
      </div>
    </>
  );
}
