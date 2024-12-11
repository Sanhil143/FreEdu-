import { useState } from "react";
import { callSignup } from "../../api/auth";
import PropTypes from "prop-types";

/**
 * This component renders a registration form. It handles the form submission
 * by calling the callSignup api function. If the response is successful, it
 * toggles the auth mode to login. If the response fails, it logs the error
 * message to the console.
 *
 * @param {Function} toggleAuthMode - toggles the auth mode
 * @returns {JSX.Element} - a JSX element representing the register form
 */
const Register = ({ toggleAuthMode }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formdata = new FormData();
  formdata.append("firstName", data.name);
  formdata.append("email", data.email);
  formdata.append("password", data.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await callSignup(formdata);
      if (response.data) {
        toggleAuthMode();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div
      style={{
        height: "97%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "92%",
          width: "95%",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "55%",
            backgroundImage:
              "url('/Auth//register.png'), linear-gradient(rgba(28, 30, 83, 0.7), rgba(28, 30, 83, 0.7))",
            backgroundSize: "cover",
            position: "relative",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >
          <h3
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              letterSpacing: "0.5%",
              lineHeight: "160%",
              position: "absolute",
              top: "10%",
              left: "10%",
              color: "white",
              zIndex: 1,
            }}
          >
            One Step Closer To <br></br>
            Your dream
          </h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "28px",
              position: "absolute",
              top: "45%",
              left: "10%",
              color: "white",
              zIndex: 1,
            }}
          >
            A free E-Learning service that is ready to help you <br></br>become
            an expert
          </p>
        </div>

        <div
          style={{
            height: "100%",
            width: "45%",
            backgroundColor: "#1C1E53",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "85%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "90%",
                width: "80%",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "white",
                  }}
                >
                  Register
                </h3>
              </div>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "150%",
                  }}
                >
                  Prepare yourself for a future full of stars
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    height: "150px",
                    marginTop: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      boxSizing: "border-box",
                      padding: "15px",
                      margin: "0",
                      outline: "none",
                      backgroundColor: "#1C1E53",
                      borderRadius: "5px",
                      border: "1px solid grey",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      boxSizing: "border-box",
                      padding: "15px",
                      margin: "0",
                      outline: "none",
                      backgroundColor: "#1C1E53",
                      borderRadius: "5px",
                      border: "1px solid grey",
                      color: "white",
                    }}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                      boxSizing: "border-box",
                      padding: "15px",
                      margin: "0",
                      outline: "none",
                      backgroundColor: "#1C1E53",
                      borderRadius: "5px",
                      border: "1px solid grey",
                      color: "white",
                    }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "100%",
                    marginTop: "15px",
                    backgroundColor: "#FCD980",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      height: "30px",
                      width: "40%",
                      border: "none",
                      backgroundColor: "#FCD980",
                      cursor: "pointer",
                    }}
                  >
                    Signin
                  </button>
                </div>
              </form>
              <div
                style={{
                  height: "30px",
                  width: "100%",
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    height: "30px",
                    width: "75%",
                    color: "white",
                  }}
                >
                  Already have a account?{" "}
                  <span
                    onClick={toggleAuthMode}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#FCD980",
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  toggleAuthMode: PropTypes.func.isRequired,
};

export default Register;
