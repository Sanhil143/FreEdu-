import React from "react";
import Navbar from "./common/Navbar";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            height: "500px",
            width: "100%",
            backgroundColor: "#1C1E53",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "80%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "350px",
                width: "49%",
              }}
            >
              <div
                style={{
                  width: "95%",
                  marginTop: "25px",
                }}
              >
                <h1
                  style={{
                    fontSize: "42px",
                    lineHeight: "160%",
                    letterSpacing: "0.5%",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Build and Make Dreams Come <br></br>True with EDUFREE
                </h1>
              </div>
              <div
                style={{
                  width: "90%",
                  marginTop: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    letterSpacing: "150%",
                    color: "#ffffff",
                    fontWeight: "lighter",
                  }}
                >
                  EDUFREE is a free online course and trining service that ims
                  to help you achieve your dreams in the technology field
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "50px",
                  height: "54px",
                  width: "60%",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                  }}
                >
                  <button
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "5px",
                      backgroundColor: "#FCD980",
                      cursor: "pointer",
                    }}
                  >
                    View Courses
                  </button>
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      color: "#ffffff",
                      fontWeight: "lighter",
                      cursor: "pointer",
                    }}
                  >
                    View Learning Flow→
                  </h4>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "350px",
                width: "45%",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                }}
                src="/group.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{
          height:"231px",
          width:"100%",
          border:"1px solid black",
          backgroundColor:"#EEF4FA"
        }}></div>
      </div>
    </div>
  );
};

export default Landingpage;
