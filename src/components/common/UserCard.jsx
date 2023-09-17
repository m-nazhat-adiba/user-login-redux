import React from "react";
import Button from "./Button";

const UserCard = ({ props }) => {
  return (
    <div className="flex flex-col w-96 mx-auto border-2 my-5 p-4">
      <p className="text-xl font-semibold">
        Username: {props.first_name} {props.last_name}
      </p>
      <p className="text-lg">Email: {props.email}</p>
      <div className="flex mt-4 gap-2">
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>
      </div>
    </div>
  );
};

export default UserCard;
