// // import React, { useState } from 'react';
// // import axios from 'axios';


// // const [name, setName] = useState('');
// // const [email, setEmail] = useState('');
// // const [subject, setSubject] = useState('');
// // const [message, setMessage] = useState('');
// // const [isLoading, setIsLoading] = useState(false);
// // const [error, setError] = useState('');

// // const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError('');

// //     if (!name || !email || !subject || !message) {
// //         setError('All fields are required.');
// //         setIsLoading(false);
// //         return;
// //       }
      
// //       if (!/\S+@\S+\.\S+/.test(email)) {
// //         setError('Invalid email format.');
// //         setIsLoading(false);
// //         return;
// //       }
    
      
// //       const formData = {name, email, subject, message };
    
// //       try {
// //         const response = await fetch(" YOUR API LINK GOES HERE", {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(formData),
// //         });
      
// //         const result = await response.json();

// //         if (response.ok) {
// //             alert(result.message || 'Email sent successfully!');
// //             setName('');
// //             setEmail('');
// //             setSubject('');
// //             setMessage('');
// //           } else {
// //             setError(result.error || 'Failed to send email.');
// //           }
// //         } catch (error) {
// //           setError('An unexpected error occurred. Please try again later.');
// //         } finally {
// //           setIsLoading(false);
// //         }
// //     }



// // const Login = () => {
// //   const [formData, setFormData] = useState({ username: '', password: '' });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await axios.post('http://localhost:5000/login', formData);
// //     if (response.data.success) alert('Logged In Successfully!');
// //     else alert('Invalid credentials');
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
// //         <h2 className="text-2xl font-bold mb-4">Log In</h2>
// //         <input type="text" placeholder="Username" name="username" onChange={(e) => setFormData({...formData, username: e.target.value})} required />
// //         <input type="password" placeholder="Password" name="password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
// //         <button type="submit">Log In</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default Login;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulating login check (you'd connect to your backend here)
//     if (email === 'user@example.com' && password === 'password') {
//       onLogin();
//       navigate('/');
//     } else {
//       alert('Invalid credentials!');
//     }
//   };

//   return (
//     <div className="h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to backend
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save the token in localStorage
      localStorage.setItem('token', data.token);
      onLogin();
      navigate('/');
    } else {
      alert(data.message || 'Invalid credentials');
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
          onClick={() => navigate("/homePage")}
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
