// function for when a file is uploaded it taked the url makes it readable and then displays the image
function LoadFile(event) {
    document.getElementById("outputimg").src = URL.createObjectURL(
      event.target.files[0]
    );
  }

  export default LoadFile