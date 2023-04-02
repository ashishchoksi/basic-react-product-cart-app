import React from "react";

// Class based component
class Navbar extends React.Component {
  // initialize props
  // use props with this.props
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.totalItems);
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <div className="navbar-brand">
              Cartify{" "}
              <span className="badge bg-secondary">
                {this.props.totalItems}
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
