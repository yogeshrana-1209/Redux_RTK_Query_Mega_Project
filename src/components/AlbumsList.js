import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";  
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  
  const { data, error, isLoading } = useFetchAlbumsQuery(user.id);

  // const { data, error, isLoading } = useFetchAlbumsQuery(user.id);
  // console.log(data, error, isLoading);
  // console.log(user);

  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  }else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map(album => {
      const header = <div> {album.title} </div>
        return <ExpandablePanel key={album.id} header={header}>
            List of Photos in the album
          </ExpandablePanel>     
    });

  return <div> 
      <div>
      Albums for {user.name}
        </div>
        <div>
          {content}
        </div>
    </div>
  }
}

export default AlbumsList;
