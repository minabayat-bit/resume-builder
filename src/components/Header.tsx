import logo from "../assets/img/logo.svg";
import guy from "../assets/img/guy.jpg";
import instagram from "../assets/img/instagram.svg";
import walmart from "../assets/img/walmart.svg";
import micro from "../assets/img/microsoft.svg";
import hawi from "../assets/img/huawei.svg";
import framer from "../assets/img/framer.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const navigateSign = useNavigate();
  return (
    <div>
      <div className="w-full space-x-2 py-2.5  font-medium text-sm text-green-800 text-center bg-linear-to-r from-[#ABFF7E] to-[#FDFEFF]">
        <span className="bg-green-600 text-white py-1 px-4 rounded-md">
          New
        </span>
        <span>AI Feature Added</span>
      </div>
      <div className="flex justify-around py-6 px-2 ">
        <img className="w-35" src={logo} alt="logo" />
        <div className="flex gap-6 text-[18px] text-gray-700">
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Testimonials</a>
          <a href="">Contact</a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigateSign("/Register")}
            className="bg-green-500 text-[18px] cursor-pointer hover:bg-green-700 text-white py-1.5 px-6 rounded-3xl"
          >
            Get started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border rounded-3xl text-[18px] py-1.5 px-6 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-28 xl:top-10 -z-10 left-1/3 size-72 sm:size-96 xl:size-120 2xl:size-140 bg-green-300 blur-[100px] opacity-30"></div>
        <div className="flex flex-row justify-center items-center gap-4 mt-15">
          <img
            className="w-10 rounded-full border-2 border-white"
            src={guy}
            alt="guy"
          />
          <div className=" flex flex-col gap-1 ">
            <div className="flex flex-row stars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star text-transparent fill-green-600"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <span className="text-gray-600">Used by 10,000+ users</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-7xl font-semibold">Land your dream job with</h2>
          <span className="flex flex-row gap-2">
            <span className="text-green-600 text-7xl font-semibold">
              AI-powered
            </span>
            <span className="text-7xl font-semibold">resumes.</span>
          </span>

          <p className="text-[20px] text-center pt-6">
            Create, edit and download professional resumes with <br />{" "}
            AI-powered assistance.
          </p>
          <div className="flex flex-row gap-3 pt-8">
            <button
              onClick={() => navigateSign("/Register")}
              className="bg-green-500 cursor-pointer hover:bg-green-700 ring-offset-2 ring-1 ring-green-400 text-[18px] text-white py-3 px-10 rounded-3xl flex flex-row items-center "
            >
              Get started
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
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="border border-gray-600 cursor-pointer rounded-3xl text-[18px] py-2 px-8  flex flex-row items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-video size-5"
                aria-hidden="true"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              Try Demo
            </button>
          </div>
          <p className="py-6 text-slate-600 mt-14">
            Trusting by leading brands, including
          </p>

          <div className="flex flex-row justify-center items-center gap-16 *:w-26">
            <img src={instagram} alt="" />
            <img src={framer} alt="" />
            <img src={micro} alt="" />
            <img src={hawi} alt="" />
            <img src={walmart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
