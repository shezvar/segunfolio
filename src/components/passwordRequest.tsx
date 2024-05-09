import React, { useState } from 'react';

const ProtectedPage = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle password submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Check if the password is correct
    if (password === 'yourpassword') {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  // If user is authenticated, display the content
  if (authenticated) {
    return (
        <div className='mx-auto max-w-2xl'>
        <h1>Welcome to the Protected Page!</h1>
        <p>This is some sensitive information.</p>
      </div>
    );
  }

  // If user is not authenticated, display the password form
  return (
    <div className='mx-auto max-w-2xl z-[999]'>
      <h1>Please Enter the Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProtectedPage;
