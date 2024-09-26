import React from 'react'
import Navbar from '../common/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <div style={{
        width:"100%",
        height:"150px",
        border:"1px solid black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <div style={{
          width:"40%",
          height:"35px",
          border:"1px solid black",
          borderRadius:"5px",
        }}>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
