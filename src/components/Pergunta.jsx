import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../services/API";

const Pergunta = () => {
  const [quest, setQuest] = useState(null);
  const [resposta, setResposta] = useState(null);
  const [numero, setNumero] = useState(1);
  const [exibirresposta, setExibirRespota] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ano = queryParams.get("year");

  async function getQuest() {
    try {
      const response = await API.get(`/exams/${ano}/questions/${numero}`);
      setQuest(response.data);
    } catch (error) {
      console.log("Erro ao buscar a questão", error);
    }
  }

  useEffect(() => {
    if (ano) {
      getQuest();
      setResposta(null);
      setExibirRespota(false);
    }
  }, [numero, ano]);

  if (!quest) {
    return <p>Carregando...</p>;
  }

  function escolher(letra) {
    setResposta(letra);
  }

  function proximaQuestao() {
    setNumero(prev => prev + 1);
  }

  return (
    <div>
      <h2>{quest.title}</h2>
      <p><strong>Ano:</strong> {ano}</p>
      <p>{quest.context}</p>

      {quest.files && quest.files.map((img, i) => (
        <img key={i} src={img} alt="imagem da questão" width="300" />
      ))}

      <p>{quest.alternativesIntroduction}</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {quest.alternatives.map((alt) => (
          <li key={alt.letter} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => escolher(alt.letter)}
              style={{
                padding: '10px',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <span>{alt.letter}) {alt.text}</span>
            </button>
          </li>
        ))}
      </ul>

      {resposta && (
        <p>
          Você escolheu a letra: <strong>{resposta}</strong>
        </p>
      )}

      <div className="flex justify-content-center">
        <button onClick={() => setExibirRespota(true)}>
          Exibir resposta
        </button>
      </div>

      {exibirresposta && (
        <p>
          {resposta === quest.correctAlternative ? (
            <span style={{ color: "green" }}>Você acertou! </span>
          ) : (
            <span style={{ color: "red" }}>Você errou. </span>
          )}
          A resposta correta é: <span>{quest.correctAlternative}</span>
        </p>
      )}

      <div className="flex justify-content-center">
        <button onClick={proximaQuestao}>
          Próxima questão →
        </button>
      </div>
    </div>
  );
};

export default Pergunta;