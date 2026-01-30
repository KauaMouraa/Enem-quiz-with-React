import { Link } from "react-router-dom";

const Playquiz = () => {
  return (
    <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
      <p className="mb-6">
        Teste seus conhecimentos respondendo questões do ENEM agora mesmo!
      </p>
      <Link to="/pergunta">
        <button className="bg-white text-green-600 font-bold px-6 py-3 rounded hover:bg-gray-200 transition">
          Começar Agora
        </button>
      </Link>
    </div>
  );
};

export default Playquiz;