import { Button, Container, useToast } from "@chakra-ui/react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import useRazorpay from "react-razorpay";
function App() {
   const Razorpay = useRazorpay();
   const toast = useToast();
   const handleAmount = async (rupess) => {
      const { data } = await axios.post("http://localhost:8080/order", {
         amount: rupess,
      });
      console.log("data:", data);
      const options = {
         key: "rzp_test_fKqaOka3L8s0hG", //Enter the Key ID generated from the Dashboard
         amount: rupess * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
         currency: "INR",
         description: "Test Transaction",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkFPrfEVTY2M5rSCFmBKH1GhpF3_A2UNZqXrDZ_zpe4HCsmzCD2y_OZvvCtndJD3yvfQ&usqp=CAU",
         order_id: data.order, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
         handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
         },
      
         theme: {
            color: "#3399cc",
         },
      };
      const rzp1 = new Razorpay(options);

      rzp1.open();
   };

   return (
      <Container maxW={"container"} p={0} m={0}>
         {/* <Button onClick={() => handleAmount(1000)}>order</Button> */}
         <Navbar />
         <AllRoutes />
         <Footer /> 
      </Container>
   );
}

export default App;
