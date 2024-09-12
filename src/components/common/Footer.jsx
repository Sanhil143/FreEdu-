import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          height: "400px",
          width: "100%",
          marginTop: "50px",
          display: "flex",
          backgroundColor: "#1C1E53",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "420px",
            }}
          >
            <div
              style={{
                marginTop: "70px",
                color: "#ffffff",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  letterSpacing: "0.5%",
                  lineHeight: "140%",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                [FREE EDUF]
              </h3>
              <p
                style={{
                  marginTop: "15px",
                  fontSize: "19px",
                  lineHeight: "150%",
                  fontWeight: "lighter",
                  color: "#ffffff",
                }}
              >
                Build and create dreams with edufree
              </p>
            </div>

            <div
              style={{
                height: "88px",
                width: "100%",
                backgroundColor: "#FCD980",
                marginTop: "164px",
                borderRadius: "5px",
                display: "flex",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "70%",
                    width: "80%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      letterSpacing: "0.5%",
                      fontWeight: "normal",
                      marginTop: "5px",
                    }}
                  >
                    Email
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      marginTop: "3px",
                    }}
                  >
                    xyz@gmail.com
                  </p>
                </div>
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
                <div
                  style={{
                    height: "70%",
                    width: "80%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      letterSpacing: "0.5%",
                      fontWeight: "normal",
                      marginTop: "5px",
                    }}
                  >
                    Telephone
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                    }}
                  >
                    +916459123456
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "100%",
              width: "720px",
              display:"flex",
              justifyContent:"space-evenly"
            }}
          >
            <div style={{
              height:"100%",
              width:"150px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <div style={{
                height:"70%",
                width:"100%",
              }}>
                <h3 style={{
                  fontSize:"20px",
                  color:"#ffffff"
                }}>Social Media</h3>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Instagram</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Twitter</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>LinkedIn</h5>
              </div>
            </div>
            <div style={{
              height:"100%",
              width:"150px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <div style={{
                height:"70%",
                width:"100%",
              }}>
                <h3 style={{
                  fontSize:"20px",
                  color:"#ffffff"
                }}>Program</h3>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Freedom to Learn</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Financials Courses</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Entreprneurship</h5>
              </div>
            </div>
            <div style={{
              height:"100%",
              width:"150px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <div style={{
                height:"70%",
                width:"100%",
              }}>
                <h3 style={{
                  fontSize:"20px",
                  color:"#ffffff"
                }}>Baking</h3>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>About Us</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Conditions</h5>
                <h5 style={{
                  marginTop:"10px",
                  fontSize:"18px",
                  color:"#ffffff",
                  fontWeight:"lighter",
                  cursor:"pointer"
                }}>Privacy Policy</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
