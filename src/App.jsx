import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ProductInformation from "./components/product-info";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <ProductInformation /> */}
    </div>
  );
}

export default App;
