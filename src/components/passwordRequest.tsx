import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/16/solid';

const LockScreen = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Check if the entered password is correct
    if (password === '1234') { // Replace 'yourpassword' with the actual password
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (authenticated) {
    // Render the main content if authenticated
    return (
      <div>
        <h1></h1>
        {/* Add your main content here */}
      </div>
    );
  }

  // Render the lock screen if not authenticated
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-white z-50 overflow-hidden'>
      <div className='mx-auto max-w-xs content-center text-center h-full'>
        <LockClosedIcon className='h-12 text-zinc-600 w-full mb-5'/>
      <h1 className='text-gray-900 font-semibold text-2xl mb-2'>Password protected</h1>
      <p className='text-gray-500 mb-6'>To view content, enter the password provided or send a request</p>
      <form onSubmit={handleSubmit} className='w-full grid grid-cols-1'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className='border p-2 rounded-lg'
        />
        <button type="submit" className='bg-indigo-600 text-gray-200 rounded-lg mt-3 p-2'>Unlock page</button>
      </form>
      </div>
    </div>
  );
};

export default LockScreen;
