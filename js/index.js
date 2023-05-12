
// get  Get Free Quote window
var modal = document.getElementById('myModal')
var btn = document.getElementById('MyBtn')
var span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.style.display = 'block'
}
span.onclick = function () {
  modal.style.display = 'none'
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  // Header fix
  window.addEventListener("scroll", function() {
    var header = document.getElementById("myHeader");
    if (window.pageYOffset > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });



  // container
const targetElement = document.getElementById("conter-area");
// Create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the target element is in view
    if (entry.isIntersecting) {
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 7000;
      valueDisplays.forEach((valueDisplays) => {
        let statrtValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
          statrtValue += 1;
          valueDisplays.textContent = statrtValue;
          if (statrtValue == endValue){
            clearInterval(counter);
          }
        }, duration);
      });
      // Stop observing once the element is in view
      observer.unobserve(targetElement);
    }
  });
});
// Start observing the target element
observer.observe(targetElement);
