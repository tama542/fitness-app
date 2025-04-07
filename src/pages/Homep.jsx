import React from "react";


function Home({ onLogout }) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Website</h1>
          <p className="mb-4">This is the exclusive content page that only logged-in users can access.</p>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }
  
   export default Home;