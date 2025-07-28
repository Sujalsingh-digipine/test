import { Route, Routes } from "react-router";
import { Login } from "./module/auth/_components/Login";
import { Register } from "./module/auth/_components/Register";
import Home from "./module/home/_components/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
