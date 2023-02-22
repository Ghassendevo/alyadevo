import React from 'react'
import { Link } from 'react-router-dom'
export default function Body() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' ,paddingTop:200}}>
      <h1 className="margin" style={{}}>Your Journey Your Story</h1>
      <p >Choose Your Favourite Destination</p>
      <div style={{display:'flex',flexDirection:'row'}}>
        <button  ><Link className="nav-link" to="/Login">Login</Link></button>
        <button style={{ marginLeft: "20px" }} >
          <Link className="nav-link" to="/signup">SignUp</Link>

        </button>
      </div>

    </div>
  )
}
