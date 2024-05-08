import { useState } from "react";

function AddCharacterForm({onAddCharacter}) {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const defaultImg = "user.png"

    const handleSubmit = (e) => {
        e.preventDefault()
        const addCharacterToForm = {
            first: e.target.FirstName.value,
            last: e.target.LastName.value,
            img: img || defaultImg,
            desc: e.target.description.value
        }
        onAddCharacter(addCharacterToForm)
        setFirst("")
        setLast("")
        setImg("")
        setDesc("")
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            setImg(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file)
        }

    }


    return (
        <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <div>
            {/* <!-- First Name --> */}
            <label htmlFor="fname" className="form-label fs-3">First Name:</label>
            <input
              type="text"
              className="form-control text-center rounded-pill"
              id="fname"
              name="FirstName"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
            />
            

            {/* <!-- Last Name --> */}
            <label htmlFor="lname" className="form-label fs-3">Last Name:</label>
            <input
              type="text"
              className="form-control text-center rounded-pill"
              id="lname"
              name="LastName"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
            />
            
          </div>

          {/* <!-- image Choice --> */}
          <div>
            <label htmlFor="outputimg" className="form-label fs-3">Image:</label> 
            <img
              src={img || defaultImg}
              alt="Your image here"
              className="rounded mx-auto d-block border rounded-pill"
              id="outputimg"
            />
            

            <div>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={handleImageChange}
                required
              />
            </div>
            

            {/* <!-- description --> */}
            <div>
              <label htmlFor="desc" className="form-label fs-3">Description:</label> 
              <input
                type="text"
                className="form-control text-center rounded-pill"
                id="desc"
                name="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
              
            </div>

            {/* <!-- submit button --> */}
            <button type="submit">Submit</button>
          </div>
        </div>
        </form>
    )
}

export default AddCharacterForm