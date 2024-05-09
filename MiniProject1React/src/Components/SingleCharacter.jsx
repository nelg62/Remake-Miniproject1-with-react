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
    <div>
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
        <div className="listitem card border rounded bg-primary-subtle border-primary-subtle">
          <div className="listnum">{id}</div>
          <h5 className="tempfname card-title">{first}</h5>
          <h5 className="templname card-title">{last}</h5>
          <img
            className="tempimage card-img-top img-fluid"
            src={img}
            alt={`Picture of ${first}`}
          />
          <div className="tempdesc card-text">{desc}</div>
          <button id="removeBtn" onClick={handleDelete}>
            Remove
          </button>
          <button id="editBtn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default SingleCharacter;
