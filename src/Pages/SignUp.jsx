import "../CSS files/SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="signup-body">
        <div>
          <img
            src="images/logo.png"
            alt="Anonymous Logo"
            className="signup-logo"
          />
        </div>
        <div className="signup-welcome">
          <h1 className="signup-header">
            Welcome to <strong className="signup-strong">ANONYMOUS</strong>
          </h1>
          <p className="connect">
            Connect with people anonymously and
            <br />
            express yourself freely.
          </p>
          <div className="signup-container">
            <form action="" className="signup-form">
              <div className="signup-input">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  autoComplete="new-password"
                />
                <input
                  type="password"
                  id="confirm"
                  placeholder="Confirm password"
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="checkbox-input"
                  required
                />
                <label htmlFor="checkbox" className="custom-checkbox"></label>
                <label htmlFor="checkbox">
                  Agree to our{" "}
                  <a href="#" className="terms">
                    terms and services
                  </a>
                  .
                </label>
              </div>
              <button className="signup">Sign Up</button>
            </form>
            <footer className="signup-footer">
              <p>Your privacy and security are our top priorities.</p>

              <p className="signup-footer-text">
                Already have an account?{" "}
                <a href="login.html" className="login-link">
                  Log In
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
