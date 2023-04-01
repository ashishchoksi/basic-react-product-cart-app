import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"; // .jsx is optioal
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { useState } from "react"; // this will set the state

function App() {
  const products = [
    {
      name: "iphone 12",
      price: 50000,
      qty: 0,
    },
    {
      name: "Galaxy s22",
      price: 60000,
      qty: 0,
    },
  ];

  /**
   * This will create state with default value of above products
   * useState give you 2 thing
   *  1. variable to access properties
   *  2. setter to update the properties
   */
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQty = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].qty++;
    newTotalAmount += newProductList[index].price;

    // this will compare virtual DOM and physical DOM and update value which is changes
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQty = (index) => {
    if (productList[index].qty <= 0) {
      return;
    }
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].qty--;
    newTotalAmount -= newProductList[index].price;

    // this will compare virtual DOM and physical DOM and update value which is changes
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // This set ll qty to 0 and toalAmount = 0
  const reset = () => {
    const newProductList = [...productList];
    newProductList.map((product) => {
      product.qty = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  return (
    <>
      <Navbar />
      <main className="container g-0 mt-5">
        <ProductList
          productList={productList}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
