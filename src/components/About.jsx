const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="card shadow-lg border-0 anim-slide-in" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-body p-4 text-center">
          <h1 className="fw-bold text-success mb-3">Quiz ENEM</h1>
          <p className="text-muted lh-lg mb-0">
            ENEM Quiz é um site interativo de prática para o Exame Nacional do Ensino Médio,
            onde usuários podem responder questões do ENEM de forma dinâmica.
            O projeto utiliza <strong>React</strong> para a interface, consumindo uma <strong>API</strong>
            para carregar perguntas e respostas em tempo real. Além disso, o site conta com navegação entre
            páginas, feedback imediato e um layout responsivo, tornando a experiência de estudo prática e envolvente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;