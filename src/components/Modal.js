import React from "react";

const Modal = () => {
  return (
    <div className="w-96 bg-white p-5 shadow-xl rounded-lg text-center">
      <div className="bg-green-100 text-green-900 w-12 h-12 rounded-full flex justify-center items-center mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="mt-2 text-xl">Payment successful</h3>
      <p className="mt-2 text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        ratione?
      </p>
      <button className="mt-4 bg-blue-600 active:bg-blue-800 hover:bg-blue-700 focus:ring-blue-600 focus:ring-opacity-50 tracking-wide text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-4 transition duration-150 ease-in-out">
        Go back to dashboard
      </button>
    </div>
  );
};

export default Modal;
