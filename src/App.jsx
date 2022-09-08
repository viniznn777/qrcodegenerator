import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRCODE from "./components/pages/QR Code Generator/QRCODE";
import Home from "./components/pages/Home/Home";
import WhatsAppGenerator from "./components/pages/QR Code Generator WhatsApp/WhatsApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/siteqrcodegenerator" element={<QRCODE />}></Route>
          <Route
            path="/whatsappqrcodegenerator"
            element={<WhatsAppGenerator />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
