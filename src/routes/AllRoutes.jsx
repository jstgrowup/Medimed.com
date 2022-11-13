import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";
import SingleProduct from "./Wellness/SingleProductPage/SingleProduct";
import Wellness from "./Wellness/Wellness";


function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/wellness" element={<Wellness/>}/>
         <Route path="/wellness/:id" element={<SingleProduct/>}/>
         <Route path="/payment" element={<Payment/>}/>
      </Routes>
   );
}

export default AllRoutes;
