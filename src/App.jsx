import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Cart from "./cart";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Cart />
    </div>
  );
}

export default App;
