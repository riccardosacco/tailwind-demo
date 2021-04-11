function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white p-5 shadow rounded-md">
        <h1 className="font-medium text-2xl text-center">
          Login into your account
        </h1>
        <form className="space-y-3 mt-4">
          {/* <div>
            <label htmlFor="">Email</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring-4 focus:ring-blue-200 focus:ring-opacity-50"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring-4 focus:ring-blue-200 focus:ring-opacity-50"
              type="password"
            />
          </div> */}
          <div class="animate-pulse space-y-2">
            <div class="h-4 bg-gray-200 rounded w-24"></div>
            <div class="bg-gray-200 rounded h-12 w-full"></div>
          </div>
          <div class="animate-pulse space-y-2">
            <div class="h-4 bg-gray-200 rounded w-24"></div>
            <div class="bg-gray-200 rounded h-12 w-full"></div>
          </div>
          <button
            className="inline-block transition w-full items-center px-4 py-2 rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
