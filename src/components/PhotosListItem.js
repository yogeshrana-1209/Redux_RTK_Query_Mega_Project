import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div
      onClick={handleRemovePhoto}
      className="relative m-2 p-2 cursor-pointer bg-gray-100 rounded-lg shadow-md group"
    >
      <img
        className="h-20 w-20 group-hover:blur-sm transition-all"
        src={photo.url}
        alt="random pic"
      />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 hover:bg-opacity-50 rounded-lg">
        <GoTrash className="text-3xl font-extrabold text-red-500 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </div>
  );
}

export default PhotosListItem;
