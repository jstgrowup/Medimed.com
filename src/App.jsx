import { Container } from "@chakra-ui/react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Container maxW={"container"} p={0} m={0}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Container>
  );
}

export default App;
