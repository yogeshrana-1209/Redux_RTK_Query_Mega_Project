import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user.id);

  console.log(data, error, isLoading);
  console.log(user);

  return <div> Albums for {user.name}</div>;
}

export default AlbumsList;
