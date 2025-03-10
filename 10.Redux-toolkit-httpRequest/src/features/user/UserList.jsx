import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./UserSlice";
import User from "./user";

const UserList = () => {
  const dispatch = useDispatch();

  // builder ile aldigimiz seyleri buraya getirdik
  const { users } = useSelector((store) => store.user);
  // use selector kullanarak userSlice in icerisinde ki initialState i getirdik
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
