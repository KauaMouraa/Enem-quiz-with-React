import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Playquiz = () => {
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!year) {
      setError(true);
      return;
    }

    setError(false);
    navigate(`/pergunta?year=${year}`);
  };

  return (
    <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>

      <p className="mb-4">
        Teste seus conhecimentos respondendo questões do ENEM agora mesmo!
      </p>

      {/* Seleção de ano */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-full p-2 mb-3 rounded text-black"
      >
        <option value="">Escolha o ano</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>

      {/* Mensagem de erro */}
      {error && (
        <p className="text-red-300 mb-3">
          ⚠️ Selecione um ano antes de começar!
        </p>
      )}

      <button
        onClick={handleStart}
        className="bg-white text-green-600 font-bold px-6 py-3 rounded hover:bg-gray-200 transition"
      >
        Começar Agora
      </button>
    </div>
  );
};

export default Playquiz;