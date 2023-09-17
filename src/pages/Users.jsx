import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../redux/slice/usersSlice";
import UserCard from "../components/common/UserCard";

const Users = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(userData());
  }, []);

  console.log("data", fetchedData);

  return (
    <div className="grid grid-cols-1">
      {fetchedData.map((item) => (
        <UserCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Users;
