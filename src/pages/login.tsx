import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <div>
      <h2>🔐 Login Page</h2>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
