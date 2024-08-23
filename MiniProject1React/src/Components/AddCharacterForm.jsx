import { useState } from "react";

function AddCharacterForm({ onAddCharacter }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const defaultImg = "user.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    const addCharacterToForm = {
      first: e.target.FirstName.value,
      last: e.target.LastName.value,
      img: img || defaultImg,
      desc: e.target.description.value,
    };
    onAddCharacter(addCharacterToForm);
    setFirst("");
    setLast("");
    setImg("");
    setDesc("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        {/* <!-- First Name --> */}
        <label htmlFor="fname" className="block text-lg font-medium">
          First Name:
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          id="fname"
          name="FirstName"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
      </div>
      <div>
        {/* <!-- Last Name --> */}
        <label htmlFor="lname" className="block text-lg font-medium">
          Last Name:
        </label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          id="lname"
          name="LastName"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
      </div>

      {/* <!-- image Choice --> */}
      <div>
        <label htmlFor="outputimg" className="block text-lg font-medium">
          Image:
        </label>
        <img
          src={img || defaultImg}
          alt="Your image here"
          className="mt-1 block w-32 h-32 object-cover rounded-md border border-gray-300"
          id="outputimg"
        />

        <div>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            className="mt-2"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* <!-- description --> */}
        <div>
          <label htmlFor="desc" className="block text-lg font-medium">
            Description:
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm"
            id="desc"
            name="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        {/* <!-- submit button --> */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddCharacterForm;
