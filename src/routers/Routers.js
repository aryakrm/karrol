import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hakkimizda from "../pages/Hakkimizda/Hakkimizda";
import Tedarikciler from "../pages/Tedarikciler/Tedarikciler";
import Iletisim from "../pages/Iletisim/Iletisim";
import Distribütör from "../pages/Distribütör/Distribütör";


function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<Hakkimizda />} />
      <Route path="suppliers" element={<Tedarikciler />} />
      <Route path="distributor" element={<Distribütör />} />
      <Route path="contact" element={<Iletisim />} />
    </Routes>
  );
}

export default Routers;
