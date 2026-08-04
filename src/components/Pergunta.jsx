import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../services/API";

const Pergunta = () => {
  const [quest, setQuest] = useState(null);
  const [resposta, setResposta] = useState(null);
  const [numero, setNumero] = useState(1);
  const [exibirresposta, setExibirRespota] = useState(false);
  const [tempo, setTempo] = useState(60);

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
      setTempo(60);
    }
  }, [numero, ano]);

  useEffect(() => {
    if (exibirresposta || !quest) return;
    if (tempo <= 0) {
      setExibirRespota(true);
      return;
    }
    const id = setTimeout(() => setTempo((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [tempo, exibirresposta, quest]);

  if (!quest) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  function escolher(letra) {
    if (exibirresposta) return;
    setResposta(letra);
  }

  function proximaQuestao() {
    setNumero((prev) => prev + 1);
  }

  return (
    <div className="container my-4 anim-slide-in" key={numero} style={{ maxWidth: "700px" }}>
      <div className="progress mb-3" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-success"
          style={{ width: `${Math.min((numero / 20) * 100, 100)}%`, transition: "width 0.4s ease" }}
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-semibold text-success">Questão {numero}</span>
        <span className={`badge ${tempo <= 10 ? "bg-danger anim-pulse-loop" : "bg-success"}`}>
          ⏱ {tempo}s
        </span>
      </div>

      <div className="card shadow-sm p-3 mb-3">
        <h5 className="card-title">{quest.title}</h5>
        <p className="text-muted mb-1"><strong>Ano:</strong> {ano}</p>
        <p className="card-text">{quest.context}</p>

        {quest.files && quest.files.map((img, i) => (
          <img key={i} src={img} alt="imagem da questão" className="img-fluid rounded mb-2" style={{ maxWidth: "300px" }} />
        ))}

        <p>{quest.alternativesIntroduction}</p>
      </div>

      <div className="list-group mb-3">
        {quest.alternatives.map((alt) => {
          const isSelected = resposta === alt.letter;
          const isCorrectAlt = alt.letter === quest.correctAlternative;

          let classes = "list-group-item list-group-item-action alt-button-hover";
          let extraAnim = "";
          if (exibirresposta) {
            if (isCorrectAlt) { classes += " list-group-item-success"; extraAnim = "anim-pulse"; }
            else if (isSelected) { classes += " list-group-item-danger"; extraAnim = "anim-shake"; }
          } else if (isSelected) {
            classes += " active";
          }

          return (
            <button
              key={alt.letter}
              onClick={() => escolher(alt.letter)}
              className={`${classes} ${extraAnim}`}
              disabled={exibirresposta}
            >
              {alt.letter}) {alt.text}
            </button>
          );
        })}
      </div>

      {!exibirresposta && (
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-outline-success" onClick={() => setExibirRespota(true)}>
            Exibir resposta
          </button>
        </div>
      )}

      {exibirresposta && (
        <div className={`alert anim-fade-in ${resposta === quest.correctAlternative ? "alert-success" : "alert-danger"}`}>
          {resposta === quest.correctAlternative ? "✅ Você acertou!" : "❌ Você errou."}{" "}
          A resposta correta é: <strong>{quest.correctAlternative}</strong>
        </div>
      )}

      <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={proximaQuestao} disabled={!exibirresposta}>
          Próxima questão →
        </button>
      </div>
    </div>
  );
};

export default Pergunta;