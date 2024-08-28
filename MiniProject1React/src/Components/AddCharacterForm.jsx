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
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit} //handle submit of form
        className="w-full max-w-lg p-8 bg-background-paper shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Create New Character
        </h2>
        <div className="mb-4">
          {/* <!-- First Name Input --> */}
          <label
            htmlFor="fname"
            className="block text-text-primary font-medium mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            id="fname"
            name="FirstName"
            placeholder="Enter first name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          {/* <!-- Last Name Input--> */}
          <label
            htmlFor="lname"
            className="block text-text-primary font-medium mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            id="lname"
            name="LastName"
            placeholder="Enter last name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
        </div>

        {/* <!-- Image Choice --> */}
        <div className="mb-4">
          <label
            htmlFor="outputimg"
            className="block text-text-primary font-medium mb-2"
          >
            Image:
          </label>
          <div className="flex items-center justify-center mb-2">
            <img
              src={img || defaultImg} // Display selected image or default image
              alt="Your image here"
              className="-32 h-32 object-contain rounded-full border-2 border-primary"
              id="outputimg"
            />
          </div>

          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              className="w-full px-3 py-2 text-text-primary border border-neutral rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={handleImageChange} // Handle image change
            />
          </div>

          {/* <!-- Description Input --> */}
          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block text-text-primary font-medium mb-2"
            >
              Description:
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-neutral rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="desc"
              name="description"
              placeholder="Enter character description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-text-light font-semibold rounded-md hover:bg-primary-light transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCharacterForm;
