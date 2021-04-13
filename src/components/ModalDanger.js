import React from "react";

const ModalDanger = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex p-5">
        <div className="bg-red-100 text-red-900 w-12 h-12 flex-shrink-0 rounded-full flex justify-center items-center">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>{" "}
        </div>
        <div className="ml-4 max-w-md">
          <h3 className="mt-2 text-xl">Deactivate account</h3>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, ratione?
          </p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse">
        <button className="ml-2 bg-red-600 active:bg-red-800 hover:bg-red-700 focus:ring-red-600 focus:ring-opacity-50 tracking-wide text-white px-4 py-2 rounded-md focus:outline-none focus:ring-4 transition duration-150 ease-in-out">
          Deactivate
        </button>
        <button className="bg-white active:bg-gray-100 text-gray-700 hover:bg-gray-50 border border-gray-300 focus:ring-gray-200 focus:ring-opacity-50 tracking-wide px-4 py-2 rounded-md focus:outline-none focus:ring-4 transition duration-150 ease-in-out">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalDanger;
