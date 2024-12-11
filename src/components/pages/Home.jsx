import Navbar from "../common/Navbar";

const Home = () => {
  const listStyle = {
    listStyle: "none",
    cursor: "pointer",
  }
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            width: "100%",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "35px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <input
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "5px",
                  paddingLeft: "10px",
                }}
              />
            </div>
            <ul
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                listStyle: "none",
                padding: "5px",
                marginTop: "20px",
              }}
            >
              <li style={listStyle}>All</li>
              <li style={listStyle}>UI</li>
              <li style={listStyle}>Programming</li>
              <li style={listStyle}>Marketing</li>
              <li style={listStyle}>Networking</li>
              <li style={listStyle}>Data Analyst</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
