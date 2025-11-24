import { useEffect } from "react";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Modal from "../components/Modal";

import { useModalStore } from "../store/modalStore";

const Dashbord = () => {

   const { openModal } = useModalStore();


  // const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log(localStorage.getItem("token"));
  //     if (localStorage.getItem("token") === null) {
  //       navigate("/login");
  //     }
  //   }, []);

  return (
    <div>
      <div className="flex flex-row justify-between p-6 border-b-gray-200 ">
        <img src={logo} alt="" />
        <div className="flex gap-4 items-center">
          <span>
            hi <span>{}</span>
          </span>
          <button
            className="border border-gray-200 rounded-4xl py-1 px-6 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            logout
          </button>
        </div>
      </div>

      <div className="p-8 bg-gray-50 h-screen">
        <div className="flex gap-4 ">
          <button  onClick={openModal} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500  text-white rounded-full"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-cloud-upload size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500  text-white rounded-full"
              aria-hidden="true"
            >
              <path d="M12 13v8"></path>
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
              <path d="m8 17 4-4 4 4"></path>
            </svg>
            <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Dashbord;
