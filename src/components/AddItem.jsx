import React from "react";

/**
 * In class based component we have to use this.props & this.state
 * In function based compoent we have to use props as function param & state in useState() hook
 */
class AddItem extends React.Component {
  // This is the way to get props
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <>
        <form className="row">
          <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
              Item name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              onChange={(e) =>
                this.setState({ productName: e.currentTarget.value })
              }
              value={this.productName}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              onChange={(e) =>
                this.setState({ productPrice: e.currentTarget.value })
              }
              value={this.productPrice}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary col-4"
            onClick={() =>
              this.props.addProduct(
                this.state.productName,
                this.state.productPrice
              )
            }
          >
            Add
          </button>
        </form>
      </>
    );
  }
}

export default AddItem;
