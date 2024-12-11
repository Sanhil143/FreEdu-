import Navbar from "./common/Navbar";
import boxContent from "../json/landingPageCards.json";
import Footer from "./common/Footer";

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
                    border:"none"

                  }}
                >
                  <button
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "5px",
                      backgroundColor: "#FCD980",
                      cursor: "pointer",
                      border:"none"
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
                src="/landingPage//group.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "231px",
            width: "100%",
            backgroundColor: "#EEF4FA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "71px",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "415px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "69px",
                  width: "138px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    letterSpacing: "0.5%",
                    fontSize: "32px",
                  }}
                >
                  21000+
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#282938",
                  }}
                >
                  Enrolled Students
                </p>
              </div>
              <div
                style={{
                  height: "69px",
                  width: "138px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    letterSpacing: "0.5%",
                    fontSize: "32px",
                  }}
                >
                  100+
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#282938",
                  }}
                >
                  Expert Instructor
                </p>
              </div>
              <div
                style={{
                  height: "69px",
                  width: "138px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    letterSpacing: "0.5%",
                    fontSize: "32px",
                  }}
                >
                  150+
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "#282938",
                  }}
                >
                  Free Courses
                </p>
              </div>
            </div>
            <div
              style={{
                height: "36px",
                width: "780px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div>
                <img src="/landingPage/lorem.png" />
              </div>
              <div>
                <img src="/landingPage/ditlance.png" />
              </div>
              <div>
                <img src="/landingPage/best.png" />
              </div>
              <div>
                <img src="/landingPage/neopots.png" />
              </div>
              <div>
                <img src="/landingPage/onago.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "150px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: "38px",
              letterSpacing: "0.8%",
              lineHeight: "150%",
              color: "#282938",
            }}
          >
            Benefits of Joining EDUFREE E-Learning
          </h3>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "674px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "1300px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {boxContent.map((content, index) => (
              <div
                key={index}
                style={{
                  height: "300px", // Box height
                  width: "406px", // Box width (30% to fit 3 boxes in a row)
                  marginBottom: "20px", // Space between rows
                  display: "flex",
                  justifyContent: "center", // Center content horizontally
                  alignItems: "center", // Center content vertically
                  backgroundColor: "#D4DEFC", // Light background for visibility
                }}
              >
                <div
                  style={{
                    width: "314px",
                    height: "100%",
                  }}
                >
                  <img
                    src={content.imgSrc}
                    alt={content.title}
                    style={{ width: "40px", height: "40px", marginTop: "30px" }} // Image size and margin
                  />
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "#282938",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    {content.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#282938",
                      fontWeight: "lighter",
                      lineHeight: "28px",
                      marginTop: "20px",
                    }}
                  >
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
