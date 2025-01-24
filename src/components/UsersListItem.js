import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        loading={isLoading}
        onClick={handleClick}
        className="hover:bg-red-100 transition-colors duration-200 p-1 sm:p-2 rounded-full"
      >
        <GoTrash className="text-red-500 hover:text-red-600 text-sm sm:text-base" />
      </Button>
      {error && (
        <div className="text-red-500 text-xs sm:text-sm font-medium">
          Error deleting user.
        </div>
      )}
      <div className="text-gray-700 font-medium text-base sm:text-lg hover:text-gray-900 truncate">
        {user.name}
      </div>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
