function myFunction() {
    var x = document.querySelector(".navlinks");
    const reqButton = document.querySelector(".req-btn");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }