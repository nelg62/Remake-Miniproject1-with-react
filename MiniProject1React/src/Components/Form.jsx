import LoadFile from "./LoadFile"

function Form() {
    return (
        <form>
        <div className="mt-3">
          <div>
            {/* <!-- First Name --> */}
            <label htmlFor="fname" className="form-label fs-3">First Name:</label>
            <input
              type="text"
              className="form-control text-center rounded-pill"
              id="fname"
              name="FirstName"
              required
            />

            {/* <!-- Last Name --> */}
            <label htmlFor="lname" className="form-label fs-3">Last Name:</label>
            <input
              type="text"
              className="form-control text-center rounded-pill"
              id="lname"
              name="LastName"
              required
            />
          </div>

          {/* <!-- image Choice --> */}
          <div>
            <label htmlFor="outputimg" className="form-label fs-3">Image: </label>
            <img
              src="user.png"
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
                onChange={(event) => LoadFile(event)}
                required
              />
            </div>

            {/* <!-- description --> */}
            <div>
              <label htmlFor="desc" className="form-label fs-3">Description: </label>
              <input
                type="text"
                className="form-control text-center rounded-pill"
                id="desc"
                name="description"
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

export default Form