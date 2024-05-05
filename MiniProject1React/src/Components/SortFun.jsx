import { newCharacter } from "./NewCharacter";

function SortFun() {
    newCharacter.sort((a, b) => {
      const aname = a.first.toLowerCase();
      const bname = b.first.toLowerCase();
      if (aname < bname) {
        return -1;
      } else if (aname > bname) {
        return 1;
      } else {
        return 0;
      }
    });
    const sortResult = bool ? newCharacter : newCharacter.reverse();
    document.getElementById('characteroutput').innerHTML = "";
    document.getElementById('sortbtn').innerHTML = bool ? 'A-Z' : 'Z-A';
    addtotemplate(sortResult);
    bool = !bool;
  }

  export default SortFun