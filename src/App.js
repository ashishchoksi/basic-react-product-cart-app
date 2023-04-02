import "./App.css";
import Navbar from "./components/Navbar"; // .jsx is optioal
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import { useState } from "react"; // this will set the state
import { getData } from "./data/ProductData";

function App() {
  /**
   * This will create state with default value of above products
   * useState give you 2 thing
   *  1. variable to access properties
   *  2. setter to update the properties
   */
  let [productList, setProductList] = useState(getData);
  let [totalAmount, setTotalAmount] = useState(0);
  let [totalItems, setTotalItems] = useState(2); // 2 -> beause we have 2 item statically added

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

  // This set qty to 0 and toalAmount = 0
  const reset = () => {
    const newProductList = [...productList];
    newProductList.map((product) => {
      product.qty = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeProduct = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].qty * newProductList[index].price;
    newProductList.splice(index, 1); // remove index from list
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);

    let newTotalItems = totalItems;
    newTotalItems--;
    setTotalItems(newTotalItems);
  };

  const addProduct = (productName, productPrice) => {
    const newProductList = [...productList];
    newProductList.push({
      name: productName,
      price: parseInt(productPrice),
      qty: 0,
    });
    setProductList(newProductList);

    let newTotalItems = totalItems;
    newTotalItems++;
    setTotalItems(newTotalItems);
  };

  return (
    <>
      <Navbar totalItems={totalItems} />
      <main className="container g-0 mt-5">
        <AddItem addProduct={addProduct} />
        <ProductList
          productList={productList}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
          removeProduct={removeProduct}
        />
      </main>
      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
