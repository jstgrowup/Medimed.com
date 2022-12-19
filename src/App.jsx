import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { getcartdata } from "./store/paymentDetails/PaymentActions";

function App() {
  const logedUserData = useSelector((store) => store.auth.data);
  const { _id } = logedUserData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcartdata(_id));
  }, [_id]);

  return (
    <Container maxW={"container"} p={0} m={0}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Container>
  );
}

export default App;
