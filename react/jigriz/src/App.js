import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import React from "react";
import LaunchingSoon from "./components/LaunchingSoon";
import Footer from "./components/Footer";
//    <Products />
{
  /* <CustomerReviews /> */
}
//  <LaunchingSoon />

function App() {
  return (
    <React.Fragment>
      <LaunchingSoon />
      <Products />
      <CustomerReviews />
      <Footer />
    </React.Fragment>
  );
}

export default App;
