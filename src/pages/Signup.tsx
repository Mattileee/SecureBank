import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/signup', { email, password });
      if (response.status === 200) {
        // Signup successful, redirect to login
        navigate('/login');
      } else {
        setError('Signup failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    // Outer wrapper with swag background
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      {/* Your existing form container */}
      <div className="max-w-sm w-full p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-xl mb-4 font-semibold text-gray-800">Sign Up</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
          />
          {/* Styled button as a link */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleSubmit(e); }}
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded cursor-pointer text-center hover:bg-blue-500 transition"
          >
            Sign Up
          </a>
          {/* Link to login */}
          <div className="mt-4 text-center">
            <a href="/login" className="text-blue-700 hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;