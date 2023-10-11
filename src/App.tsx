import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { TiposBasicos } from "./typescript/TiposBasicos";
import { Usuarios } from "./components/Usuarios";
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      <Usuarios />
    </div>
  );
};

export default App;
