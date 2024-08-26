import { useState } from "react";

// Functional component for adding a character using Prop onAddCharacter from NewCharacter.jsx which is function handleAddCharacter
function AddCharacterForm({ onAddCharacter }) {
  // State variables to manage form input values
  const [first, setFirst] = useState(""); // State for the first name
  const [last, setLast] = useState(""); // State for the last name
  const [img, setImg] = useState(""); // State for the image URL
  const [desc, setDesc] = useState(""); // State for the description

  // Default image to use if no image is provided
  const defaultImg = "user.png";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior which refreshed the page/component

    // Create an object with form data
    const addCharacterToForm = {
      first: e.target.FirstName.value, // first name value from first name input
      last: e.target.LastName.value, // last name value from last name input
      img: img || defaultImg, // Use the default image if no image id provided
      desc: e.target.description.value, // description value from description input
    };

    // Call the onAddCharacter function passed as a prop with the form data
    onAddCharacter(addCharacterToForm);

    // Reset the form fields
    setFirst("");
    setLast("");
    setImg("");
    setDesc("");
  };

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    // Upate image state with the files data URL
    reader.onloadend = () => {
      setImg(reader.result);
    };

    // If a file is selected read it as a data URL
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit} //handle submit of form
      className="space-y-4 p-4 max-w-md mx-auto bg-white shadow-md rounded-md"
    >
      <div>
        {/* <!-- First Name Input --> */}
        <label
          htmlFor="fname"
          className="block text-lg font-medium text-teal-700"
        >
          First Name:
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          id="fname"
          name="FirstName"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
      </div>
      <div>
        {/* <!-- Last Name Input--> */}
        <label
          htmlFor="lname"
          className="block text-lg font-medium text-teal-700"
        >
          Last Name:
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          id="lname"
          name="LastName"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
      </div>

      {/* <!-- Image Choice --> */}
      <div>
        <label
          htmlFor="outputimg"
          className="block text-lg font-medium text-teal-700"
        >
          Image:
        </label>
        <div className="flex justify-center items-center">
          <img
            src={img || defaultImg} // Display selected image or default image
            alt="Your image here"
            className="mt-1 w-32 h-32 object-cover rounded-md border border-teal-500"
            id="outputimg"
          />
        </div>

        <div className="mt-2">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            className="block w-full text-teal-700 file:bg-teal-100 file:border file:border-teal-300 file:text-teal-700 file:rounded-md file:py-1 file:px-2 hover:file:bg-teal-200"
            onChange={handleImageChange} // Handle image change
            required
          />
        </div>

        {/* <!-- Description Input --> */}
        <div className="mt-4">
          <label
            htmlFor="desc"
            className="block text-lg font-medium text-teal-700"
          >
            Description:
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            id="desc"
            name="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          className="mt-4 w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddCharacterForm;
