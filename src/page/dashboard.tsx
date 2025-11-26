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
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 ">
            <button
              onClick={openModal}
              className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
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
          <div className="hidden">
          <button
            className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border cursor-pointer group hover:shadow-lg transition-all duration-300 
         bg-linear-to-br from-purple-600/10 to-purple-600/30 border-purple-600/30"
          >
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
              className="lucide lucide-file-pen-line size-7 text-purple-600 group-hover:scale-105 transition-all"
            >
              <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
              <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
              <path d="M8 18h1"></path>
            </svg>

            <p className="text-sm text-purple-600 group-hover:scale-105 transition-all px-2 text-center"></p>

            <p className="absolute bottom-1 text-[11px] text-purple-600/60 group-hover:text-purple-600/80 transition-all duration-300 px-2 text-center">
              Updated on
            </p>

            <div className="absolute top-1 right-1 hidden group-hover:flex items-center">
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
                className="lucide lucide-trash size-7 p-1.5 rounded text-slate-700 transition-colors hover:bg-white/50"
              >
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>

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
                className="lucide lucide-pencil size-7 p-1.5 rounded text-slate-700 transition-colors hover:bg-white/50"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
            </div>
          </button>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Dashbord;
