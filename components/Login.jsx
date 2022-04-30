import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="gradientBG login-screen">
      <div className="LogIn">
      <h1>Welcome to Medorant!</h1>
      <button onClick={authenticate} className="btn">
        Login 
      </button>       
      </div>
    </div>
  );
};

export default Login;
