import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-2">
        <h3 className="text-base sm:text-lg font-bold">Photos In {album.title}</h3>
        <Button 
          className="w-full m-3 sm:w-auto bg-blue-800 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg shadow-md transition-colors duration-200"
          loading={addPhotoResults.isLoading} 
          onClick={handleAddPhoto}
        >
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-2">{content}</div>
    </div>
  );
}

export default PhotosList;
