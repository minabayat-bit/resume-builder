const Register = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-50 pt-30">
        <form className="bg-white  p-10 justify-center items-center flex flex-col gap-4 border border-gray-300 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-gray-900 text-3xl font-medium">Sign up</p>
            <p className="text-gray-500">Please register to continue</p>
          </div>
          <div className="flex items-center w-full p-6 gap-2 bg-white border border-gray-200 h-12 rounded-full ">
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
              placeholder="name"
              className="border-none w-full outline-none primaryTest pr-8"
              type="text"
            />
          </div>
          <div className="flex items-center w-full p-6 gap-2 bg-white border border-gray-200 h-12 rounded-full ">
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
              className="border-none w-full outline-none primaryTest pr-8"
              type="email"
            />
          </div>
          <div className="flex items-center w-full p-6 gap-2 bg-white border border-gray-200 h-12 rounded-full ">
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
          <p className="text-green-500 cursor-pointer text-[16px] self-start ">
            Forget password?
          </p>
          <button
            type="submit"
            className="cursor-pointer w-full h-12 rounded-full text-white bg-green-500 hover:bg-green-400"
          >
            sing up
          </button>
          <p className="text-gray-500 text-[12px]">
            Already have an account?
            <span className="text-green-500 cursor-pointer">click here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
