import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useStore from "../store/store";

const Login = () => {
  const loggedIn = useStore((state) => state.loggedIn);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const setUserData = useStore((state) => state.setLoggedIn);

  const userNameElement = useRef();
  const userMailElement = useRef();
  const userPasswordElement = useRef();
  const [errorMessage, seterrorMessage] = useState();
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();

    // Validate input fields before proceeding with submission
    const userName = userNameElement.current.value;
    const userMail = userMailElement.current.value;
    const userPassword = userPasswordElement.current.value;

    if (!userName && !userMail && !userPassword) {
      alert("Please fill in all fields.");
      return;
    }

    const UserData = {
      user_name: userName,
      user_mail: userMail,
      user_password: userPassword,
    };

    try {
      const response = await fetch("/api/v1/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserData),
      });

      if (response.ok) {
        const data = await response.json();
        const currentUser = data.data;
        console.log(`Success: ${currentUser}`);

        setLoggedIn(true, currentUser.accessToken, currentUser.refreshToken);
        setUserData(true, currentUser.user);
        navigate("/dashboard");
      } else {
        console.log(`Error: ${result.message}`);
        seterrorMessage(result.message);
      }
    } catch (error) {
      console.log(`Failed to send user data, ${error}`);
      seterrorMessage("Something went wrong. Please try again later.");
    }
  };
  return (
    <div className="authentication_page">
      <div className="left-section">
        <div className="text-sub">
          <h4>Login to your Account</h4>
          <p>
            Don't have an account? <Link to={"/register"}>Sign up</Link>
          </p>
        </div>

        <div className="auth-sub">
          <div className="auth-link">
            <img src="/images/google.png" />
            <p>Google</p>
          </div>
          <div className="auth-link">
            <img src="/images/github.png" />
            <p>Github</p>
          </div>
        </div>
        <form className="input-sub" onSubmit={(e) => submitForm(e)}>
          <div className="input-border">
            <span></span>
            <p>Or login with email and password</p>
            <span></span>
          </div>

          <div className="input">
            <label>Username</label>
            <input type="text" placeholder="Username" ref={userNameElement} />
          </div>

          <div className="input">
            <label>Email</label>
            <input type="email" placeholder="Email" ref={userMailElement} />
          </div>

          <div className="input">
            <label>Password</label>
            <input
              type="password"
              placeholder="*********"
              ref={userPasswordElement}
            />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="next-button">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
