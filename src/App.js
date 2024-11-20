import "./App.css";
import { Box } from "@mui/material";
import MacPage from "./pages/MacPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import IphonePage from "./pages/IphonePage";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import AirPodsPage from "./pages/AirPodsPage";
import Ipad from "./pages/IpadPage";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import PanelPague from "./pages/panel/PanelPage";
import Login from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CartProvider>
        <AuthProvider>
          <Header></Header>
          <WhatsAppButton />
          <Box sx={{ flex: 1 }}>
            {" "}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/terms" element={<FaqPage />} />
              <Route path="/mac" element={<MacPage />} />
              <Route path="/iphone" element={<IphonePage />} />
              <Route path="/ipad" element={<Ipad />} />{" "}
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/airpods" element={<AirPodsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/panel" element={<PanelPague />} />
              </Route>
            </Routes>
          </Box>
          <Footer></Footer>
        </AuthProvider>
      </CartProvider>
    </Box>
  );
}

export default App;
