import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const userNameElement = useRef();
  const userMailElement = useRef();
  const userPasswordElement = useRef();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate input fields before proceeding with submission
    const userName = userNameElement.current.value;
    const userMail = userMailElement.current.value;
    const userPassword = userPasswordElement.current.value;

    if (!userName || !userMail || !userPassword) {
      alert("Please fill in all fields.");
      return;
    }

    const UserData = {
      user_name: userName,
      user_mail: userMail,
      user_password: userPassword,
    };

    try {
      const response = await fetch("/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Success: ${result.message}`);
        navigate("/");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.log(`Failed to send user data, ${error}`);
    }

    userNameElement.current.value = "";
    userMailElement.current.value = "";
    userPasswordElement.current.value = "";
  };
  return (
    <div className="authentication_page">
      <div className="left-section">
        <div className="text-sub">
          <h4>Login to your Account</h4>
          <p>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
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
          </div>
          <div className="next-button">
            <Link to={"/"}>Back to Login </Link>
            <button>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
