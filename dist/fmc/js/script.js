let slideIndexPromo = 1;
showSlidesPromo(slideIndexPromo);

function plusSlidesPromo(n) {
  showSlidesPromo(slideIndexPromo += n);
}

function currentSlidePromo(n) {
  showSlidesPromo(slideIndexPromo = n);
}

function showSlidesPromo(n) {
  let i;
  let slides = document.getElementsByClassName("promo__item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexPromo = 1}
  if (n < 1) {slideIndexPromo = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot__active", "");
  }
  slides[slideIndexPromo-1].style.display = "grid";
  dots[slideIndexPromo-1].className += " dot__active";
}



let slideIndexAnswer = 1;
showSlidesAnswer(slideIndexAnswer);

function plusSlidesAnswer(n) {
  showSlidesAnswer(slideIndexAnswer += n);
}

function currentSlideAnswer(n) {
  showSlidesAnswer(slideIndexAnswer = n);
}

function showSlidesAnswer(n) {
  let i;
  let slides = document.getElementsByClassName("answer__item");
  let dots = document.getElementsByClassName("answer__link");
  if (n > slides.length) {slideIndexAnswer = 1}
  if (n < 1) {slideIndexAnswer = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" answer__link_active", "");
  }
  slides[slideIndexAnswer-1].style.display = "flex";
  dots[slideIndexAnswer-1].className += " answer__link_active";
}



function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}