import { useState } from "react";

const SelectYear = ({ onStart }) => {
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);

  const handleStart = () => {
    if (!year) {
      setError(true);
      return;
    }
    setError(false);
    onStart(year);
  };

  return (
    <div className="select-year-container">
      <label htmlFor="year-select">Escolha o ano da prova:</label>
      <select
        id="year-select"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Selecione</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        {/* Adicione os demais anos */}
      </select>

      {error && (
        <p style={{ color: "red", marginTop: "0.5rem" }}>
          ⚠️ Por favor, selecione um ano antes de começar
        </p>
      )}

      <button onClick={handleStart}>Começar agora</button>
    </div>
  );
};

export default SelectYear;