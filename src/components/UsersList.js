// import React, { useEffect, useState, useCallback } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import Skeleton from "./Skeleton";
import { addUser } from "../store";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);

  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();

    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    // .then(() => {
    //     // console.log('Success');
    //     setIsLoadingUsers(false);
    // })
    // .unwrap()
    // .catch((err) => {
    //   // console.log('Failed');
    //   setLoadingUsersError(err);
    //   setIsLoadingUsers(false);
    // })
    // .finally(() => {
    //   setIsLoadingUsers(false);
    // });

    // console.log(dispatch(fetchUsers()));

    //BAD CODE
    // setIsLoadingUsers(false);
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    // |||||| New code with thunk ||||||
    doCreateUser();

    // |||||| Old code without thunk ||||||
    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .catch((err) => {
    //     setCreatingUserError(err);
    //   })
    //   .finally(() => {
    //     setIsCreatingUser(false);
    //   });
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  // const renderedUsers = data.map((user) => {
  //   return (
  //     <div key={user.id} className="mb-2 border rounded">
  //       <div className="flex p-2 justify-between items-center cursor-pointer">
  //         {user.name}
  //       </div>
  //     </div>
  //   );
  // });

  //New code
  return (
    <div>
      {/* |||| New Code |||| */}
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button
          loading={isCreatingUser}
          onClick={handleUserAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
        >
          + Add User
        </Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
      {/* //Rendered Users */}
      {/* {renderedUsers} */}

      {/* old code */}
      {/* <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating user..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error creating user..."}
      </div>
      {renderedUsers} */}
    </div>
  );

  //old code
  // return (
  //   <div>
  //     <h2>Users List</h2>
  //     <div>
  //       {Array.isArray(data) && data.length > 0 ? (
  //         data.map((user, index) => (
  //           <div key={user.id || index}>
  //             {/* Render user details, for example, user.name */}
  //             {user.name}
  //           </div>
  //         ))
  //       ) : (
  //         <div>No users found.</div>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default UsersList;
