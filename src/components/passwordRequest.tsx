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
        <p className='mb-6 text-2xl text-gray-700'><span className='italic'>Sorry!</span> you need a <span className='italic'>password</span> to see project</p>
      <form onSubmit={handleSubmit} className='w-full grid grid-cols-1'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className='border px-4 py-3 rounded-lg'
        />
        <button type="submit" className='bg-indigo-600 text-gray-100 rounded-lg mt-3 p-3'>Unlock page</button>
      </form>
      {/* <p className='text-gray-700 mt-6'>Don&apos;t have a password?  <a href='mailto:shezvar@gmail.com' className='underline text-indigo-700'>Click here</a></p> */}
      </div>
    </div>
  );
};

export default LockScreen;
