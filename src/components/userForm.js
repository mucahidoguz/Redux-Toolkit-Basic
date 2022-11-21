import React from "react";
import { useSelector } from "react-redux";

const UserForm = (props) => {
  const userState = useSelector((state) => state.user);

  return (
    <div>
      <strong>FİRST NAME:</strong> {userState.firstName}
      <br />
      <strong>LAST NAME:</strong> {userState.lastName}
      <br />
      <strong>E-MAIL:</strong> {userState.email}
    </div>
  );
};

export default UserForm;
