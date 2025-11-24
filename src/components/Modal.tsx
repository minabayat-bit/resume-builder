import { useModalStore } from "../store/modalStore";

const Modal = () => {

    const { isOpen, closeModal } = useModalStore();

  if (!isOpen) return null;



  return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
        <input
          placeholder="Enter resume title"
          className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600"
          type="text"
          value=""
        />
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Create Resume
        </button>
        <button onClick={closeModal}>
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
            className=" absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Modal;
