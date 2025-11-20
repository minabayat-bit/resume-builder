import { useEffect } from "react";
import logo from "../assets/img/logo.svg"
import { useNavigate } from "react-router";

const Dashbord = () => {

    const navigate = useNavigate();
    
      useEffect(() => {
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token") === null) {
          navigate("/login");
        }
      }, []);
    

  return (
    <div>
        <div className="flex flex-row justify-between p-6">
            <img src={logo} alt="" />
            <div className="flex gap-4 items-center">
            <span>hi</span>
            <button className="border border-gray-200 rounded-4xl py-1 px-6"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >logout</button>
      </div>
        </div>

    </div>
  )
}

export default Dashbord