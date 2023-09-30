// Signin.js
import React, { useState } from 'react';
import { signin } from '../apis/auth_api';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signin(formData);
      // Handle successful signup (e.g., show a success message)
      console.log(response.data); // You might receive a token or user data from the server
    } catch (error) {
      // Handle signup error (e.g., show an error message)
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 flex-grow p-4">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
