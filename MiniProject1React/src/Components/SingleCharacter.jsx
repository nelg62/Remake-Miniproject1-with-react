function SingleCharacter({ id, first, last, img, desc }) {

  
    return (
    // <!-- template for card-->
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
      {/* <button id="removeBtn" onClick="removecurrentitem(this)">Remove</button> */}
      {/* <button id="editBtn" onClick="getvalue(this)">Edit</button> */}
    </div>
  );
}

export default SingleCharacter;
