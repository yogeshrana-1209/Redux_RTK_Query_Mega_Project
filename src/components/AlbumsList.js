import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import PropTypes from "prop-types";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = async () => {
    await addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((album) => {

      // New code
      return <AlbumsListItem key={album.id} album={album} />;

      //------------------- Old code -------------------
      // const header = <div> {album.title} </div>;
      // return (
      //   <ExpandablePanel key={album.id} header={header}>
      //     List of Photos in the album
      //   </ExpandablePanel>
      // );
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          className="w-full p-5 sm:w-auto bg-emerald-500 hover:bg-emerald-700 text-white px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-lg shadow-md transition-colors duration-200"
          onClick={handleAddAlbum}
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
AlbumsList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AlbumsList;
