import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const anos = Array.from({ length: 2022 - 2009 + 1 }, (_, i) => 2009 + i).reverse();

  const handleStart = () => {
    if (!year) {
      setError(true);
      return;
    }
    setError(false);
    navigate(`/pergunta?year=${year}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="card shadow-lg border-0 anim-slide-in" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body bg-success text-white rounded p-4 text-center">
          <h2 className="fw-bold mb-3">Pronto para começar?</h2>
          <p className="mb-4">
            Teste seus conhecimentos respondendo questões do ENEM agora mesmo!
          </p>

          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              if (error) setError(false);
            }}
            className="form-select mb-3 text-dark"
          >
            <option value="">Escolha o ano</option>
            {anos.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>

          {error && (
            <div className="alert alert-danger py-2 anim-shake" role="alert">
              ⚠️ Selecione um ano antes de começar!
            </div>
          )}

          <button
            onClick={handleStart}
            className="btn btn-light fw-bold px-4 py-2"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;