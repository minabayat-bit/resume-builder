import { useEffect } from "react";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Modal from "../components/Modal";

import { useModalStore } from "../store/modalStore";

interface Resume {
  accent_color: string;
  _id: string;
  title: string;
  updateAt: string;
}

const Dashbord = () => {
  const { openModal } = useModalStore();

  // const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log(localStorage.getItem("token"));
  //     if (localStorage.getItem("token") === null) {
  //       navigate("/login");
  //     }
  //   }, []);
  const handleCreateResume = () => {
    openModal();
  };

  const token = localStorage.getItem("token");

  const { data: resumes, refetch, } = useQuery({
    queryKey: ["resumes"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users/resumes", {
        headers: {
          Authorization: token,
        },
      });

      return data.resumes;
    },
    enabled: !!token,
  });

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
              onClick={handleCreateResume}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {resumes?.map((resume: Resume) => (
              <div
                key={resume._id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <p className="font-semibold text-slate-700">{resume.title}</p>
                <p className="text-xs text-slate-400">
                  Updated on {resume.updateAt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal refetch={refetch} />
    </div>
  );
};

export default Dashbord;
