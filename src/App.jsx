import Header from "./components/Header";
import Paths from "./routes/Paths";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/themes/primeone-light.css";

const App = () => {
  return (
    <>
      <Header />
      <Paths />
    </>
  );
};

export default App;