import { useState } from "react";
import AddCharacterForm from "./AddCharacterForm";

function SingleCharacter({ id, first, last, img, desc, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center">
      {isEditing ? (
        <AddCharacterForm
          initialData={{ id, first, last, img, desc }}
          onCancel={handleCancelEdit}
          onAddCharacter={(saveData) => {
            onEdit(id, saveData);
            setIsEditing(false);
          }}
        ></AddCharacterForm>
      ) : (
        <div className="w-72 bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-md">
          <div className="text-gray-500 text-lg font-bold mb-2">{id}</div>
          <h5 className="text-xl font-semibold">
            {first} {last}
          </h5>
          <img
            className="w-full h-auto rounded-lg mt-2 mb-2"
            src={img}
            alt={`Picture of ${first}`}
          />
          <p className="text-gray-700">{desc}</p>
          <div className="mt-4 flex space-x-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              id="removeBtn"
              onClick={handleDelete}
            >
              Remove
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              id="editBtn"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCharacter;
