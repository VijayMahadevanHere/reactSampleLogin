import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../shared/userDataProvider';

const Page1 = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData(userData);
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Email"
          required
        />
        {/* Pass userData as state in the Link component */}
        <Link to="/about">
          <button type="submit">Proceed to About</button>
        </Link>
      </form>
    </div>
  );
};

export default Page1;
