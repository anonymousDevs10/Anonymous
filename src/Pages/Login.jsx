import "../CSS files/Login.css";

const Login = () => {
  return (
    <div>
      <div className="login-body">
        <img src="images/logo.png" alt="" className="login-logo" />
        <div className="container-login">
          <h1 className="login">Welcome back!</h1>
          <form action="" className="form-login">
            <div className="login-input">
              <input type="email" id="email" placeholder="Email" autoComplete="email" required />
              <input type="password" id="password" placeholder="Password" autoComplete="password" required />
            </div>
          </form>

          <p className="privacy">Your privacy and security are our top priorities.</p>

          <button className="login">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
