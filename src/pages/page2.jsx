import React, { useContext } from "react";
import { UserDataContext } from "../shared/userDataProvider";

const Page2 = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div>
      <h2>About Page</h2>

      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  );
};

export default Page2;
