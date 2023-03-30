function displayImage(image) {
    var modal = document.querySelector(".modal");
    var modalImage = document.querySelector("#modal-image");
    modal.style.display = "block";
    modalImage.src = image.src.replace("-thumb", "");
  }
  
  function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  