import { useEffect, useState } from "react";
import { ApiUrl } from "./ApiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css"
const Create = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()
  const Store = () => {
    navigate("/LoginSignup")
  }

  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get(ApiUrl)
    setData(response.data)
  }
  useEffect(() => {
    getData()
  })


  const Validate = () => {

    data.map((items: any) => {

      if (items.email === email && items.password === password) {
        navigate("/Home")

      } else {
        window.location.reload()
      }
    })
  }
  return (
    <div className="con6">
      <div className="container">
        <div className="header4">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>

        <div className="inputs" >

          <div className="input">
            <svg width="21" height="21" fill="none" className="inputimg" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12V4.5H2v15h10"></path>
              <path d="M15 15c0-.5 2.5-1.5 2.5-1.5s2.5 1 2.5 1.5c0 4-2.5 5-2.5 5S15 19 15 15Z"></path>
              <path d="M2 4.5 12 12l10-7.5"></path>
            </svg>
            <input type="email" name="email" placeholder="Email Id" onChange={(e) => { setEmail(e.target.value) }}></input>
          </div>
          <div className="input">
            <svg width="21" height="21" fill="#949494" className="inputimg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.223 7.836c0 .61 0 1.2.193 1.753-2.02 2.372-7.355 8.64-7.852 9.117a.946.946 0 0 0-.314.704c0 .398.244.782.45.998.31.323 1.631 1.547 1.875 1.313.722-.704.867-.891 1.162-1.182.446-.436-.046-1.326.108-1.687.155-.361.32-.431.586-.488.267-.056.74.136 1.111.14.39.005.6-.159.89-.43.235-.216.404-.418.409-.732.009-.421-.6-.98-.146-1.425.455-.445 1.111.291 1.594.235.483-.056 1.069-.727 1.13-1.013.06-.286-.549-1.022-.455-1.439.033-.14.319-.469.534-.515.216-.047 1.172.323 1.388.276.262-.056.567-.333.816-.487.726.314 1.387.44 2.236.44 3.21 0 5.812-2.503 5.812-5.587 0-3.085-2.602-5.577-5.813-5.577-3.21 0-5.714 2.502-5.714 5.586ZM18.75 6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
            </svg>
            <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
        </div>

        <div className="submit-container">

          <button onClick={() => Store()} className="submit">SignUp</button>
          <button onClick={() => Validate()} className="submit">SignIn</button>

        </div>
      </div>

    </div>
  )
}
export default Create;