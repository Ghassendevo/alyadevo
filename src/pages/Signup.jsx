import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Navbarr from "../component/navbarr"
function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "mahdia" })
  const handleSubmit = async (e) => {
     let data = credentials;
    axios.post("http://localhost:3001/signup", {
      data: data,
    }).then(res => {
      if (res.data) alert("Success");
      else alert("User is already exist please try another name");
    }).catch(err => {
      alert(err)
    })

  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <Navbarr />
      <div className='container'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"  >name</label>
          <input type="text" className="form-control" name="name" onChange={onChange} />

        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => onChange(e)} />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={e => onChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="adress" className="form-label">Adress</label>
          <input type="text" className="form-control" name="adress" id="exampleInputPassword1" onChange={e => onChange(e)} />
        </div>


        <button type="submit" onClick={handleSubmit} className="m-3 btn btn-success">Submit</button>
        <Link to='/Login' className="m-3 btn btn-success">Alredy user</Link>
      </div>

    </>
  )
}
export default Signup