import { Register } from "../components/Register";
import { Login } from "../components/Login";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};
