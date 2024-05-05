import SortFun from "./SortFun";

function SortDiv() {
  return (
    <div className="container text-center mt-3">
      {/* <!-- sort A-Z Z-A Button--> */}
      <label for="sortbtn">
        Sort:
        <button type="button" id="sortbtn" onClick={SortFun()}>
          A-Z
        </button>
      </label>
      {/* <!-- search Bar--> */}
      <label for="searchBar">
        Search: <input type="search" id="searchBar" />
      </label>
    </div>
  );
}

export default SortDiv