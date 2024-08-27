import { useState } from "react";
import AddCharacterForm from "./AddCharacterForm";

function SingleCharacter({ id, first, last, img, desc, onDelete, onEdit }) {
  //  State to manage weather the component is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle deletion of a character
  const handleDelete = () => {
    onDelete(id); // Call the onDelete function passing the characters ID as prop
  };

  // Function to enter edit mode
  const handleEdit = () => {
    setIsEditing(true); //Set isEditing to true to show the edit form
  };

  // Function to cancel editing and go back to view mode
  const handleCancelEdit = () => {
    setIsEditing(false); // Set isEditing to false to show view mode
  };

  return (
    <div className="flex justify-center p-4">
      {isEditing ? (
        // If in editing mode show the AddCharacterForm for editing
        <AddCharacterForm
          initialData={{ id, first, last, img, desc }} //Pass initial data to the form
          onCancel={handleCancelEdit} // Pass handleCancelEdit to the form to handle cancel action
          onAddCharacter={(saveData) => {
            onEdit(id, saveData); // Call onEdit with the updated data when the form is submitted
            setIsEditing(false); // Exit editing mode after saving
          }}
        />
      ) : (
        //  If not in editing mode display the character details
        <div className="w-80 bg-background-paper border border-neutral rounded-lg p-6 flex flex-col items-center shadow-lg">
          {/* Dispaly character ID */}
          <div className="text-neutral-dark text-lg font-bold mb-3">
            ID: {id}
          </div>
          {/* Dispaly characters name */}
          <h5 className="text-xl font-semibold mb-2 text-text-primary">
            {first} {last}
          </h5>
          {/* Display characters image */}
          <img
            className="w-64 h-64 object-contain rounded-lg mb-4"
            src={img}
            alt={`Picture of ${first} ${last}`} // Alt text for image
          />
          {/* Dispaly characters description */}
          <p className="text-text-secondary text-center mb-4">{desc}</p>
          {/* Action buttons */}
          <div className="flex space-x-3">
            {/* Remove button */}
            <button
              className="bg-error text-text-light px-4 py-2 rounded-md hover:bg-error-dark transition duration-300"
              id="removeBtn"
              onClick={handleDelete} // Call handleDelete when clicked
            >
              Remove
            </button>
            {/* Edit button */}
            <button
              className="bg-primary text-text-light px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
              id="editBtn"
              onClick={handleEdit} // Call handleEdit when clicked
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
