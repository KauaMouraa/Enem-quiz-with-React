const About = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Quiz ENEM</h1>
      <p className="text-gray-700 text-base leading-relaxed">
        ENEM Quiz é um site interativo de prática para o Exame Nacional do Ensino Médio,
        onde usuários podem responder questões do ENEM de forma dinâmica. 
        O projeto utiliza <strong>React</strong> para a interface, consumindo uma <strong>API</strong>
        para carregar perguntas e respostas em tempo real. Além disso, o site conta com navegação entre
        páginas, feedback imediato e um layout responsivo, tornando a experiência de estudo prática e envolvente.
      </p>
    </div>
  );
};

export default About;