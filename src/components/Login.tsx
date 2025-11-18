const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-50 h-screen">
        <form className="flex flex-col bg-white py-10 px-8 justify-center items-center gap-6 border border-gray-300 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-gray-900 text-3xl font-medium">Login</p>
            <p className="text-gray-600 ">Please login to continue</p>
          </div>
          <div className="flex items-center w-full bg-white border border-gray-200 h-12 rounded-full p-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            <input
              placeholder="Email id "
              className="border-none w-full outline-none "
              type="email"
            />
          </div>
          <div className="flex items-center  border-gray-200 h-12 w-full bg-white border rounded-full p-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              placeholder="Password"
              className="border-none w-full outline-none p-6"
              type="password"
            />
          </div>
          <p className="text-green-500 text-[16px] self-start  cursor-pointer">
            Forget password?
          </p>
          <button
            type="submit"
            className="cursor-pointer w-full h-12 rounded-full text-white bg-green-500 hover:bg-green-400"
          >
            Login
          </button>
          <p className="text-gray-500 text-[12px]">
            Don't have an account?
            <span className="text-green-500 cursor-pointer">click here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
