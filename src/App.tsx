import { ProductPage } from "./pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProductPage />} />
          <Route path=":productID" element={<ProductDetail />} />
          <Route path="product-add" element={<AddProduct />} />
          <Route path="edit/:productID" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
