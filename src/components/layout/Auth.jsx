import React, { useState } from 'react'
import Login from '../auth/Login';
import Register from '../auth/Register';

const Auth = () => {
  const [isLogin,setIsLogin] = useState(true)
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "87vh",
            width: "80%",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              height: "40px",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{
              height:"20px",
            }}>
              <img style={{
                cursor:"pointer"
              }} src="/Icons//backButton.png" />
            </div>
            <div
              style={{
              height:"25px",
                marginLeft: "5px",
              }}
            >
              <h3>Homepage</h3>
            </div>
          </div>
          {isLogin ? (
            <Login toggleAuthMode={toggleAuthMode} />
          ) : (
            <Register toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth
