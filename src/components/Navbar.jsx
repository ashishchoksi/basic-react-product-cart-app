import React from "react";

// Class based component
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <div className="navbar-brand">Cartify</div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
