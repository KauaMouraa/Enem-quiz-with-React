import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pergunta from "../components/Pergunta";
import NotFound from "../pages/NotFound";

const Paths = () => {
  return (
    <Routes>
      {/* Rota inicial */}
      <Route path="/" element={<Home />} />

      {/* Perguntas */}
      <Route path="/pergunta" element={<Pergunta />} />

      {/* Rota catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Paths;