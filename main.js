const overlay = document.querySelector(".overlay");
const OpenBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close");

OpenBtn.addEventListener("click", () => {
  OpenBtn.classList.add("hide");
  closeBtn.classList.remove("hide");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hide");
  OpenBtn.classList.remove("hide");
  overlay.classList.remove("show");
});

//mobile slide
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".indicator");
const slideCount = slider.children.length;

function scrollToSlide(index) {
  const slideWidth = slider.offsetWidth;
  slider.scrollTo({
    left: index * slideWidth,
    behavior: "smooth",
  });
}

// Update dots based on scroll position
function updateActiveDot() {
  const index = Math.round(slider.scrollLeft / slider.offsetWidth);
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

// Listen to scroll event (snap updates)
slider.addEventListener("scroll", () => {
  // Small delay to wait for smooth scrolling to settle
  clearTimeout(slider._scrollTimeout);
  slider._scrollTimeout = setTimeout(updateActiveDot, 100);
});

// When indicator buttons are clicked
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    scrollToSlide(index);
  });
});

//desktop slide
slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});
slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});

//form validation
const form = document.querySelector("form");
const errorMsg = document.querySelector(".erromsg");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  if (email.value == "") {
    event.preventDefault();
    errorMsg.textContent = "Please enter a valid email";
    email.style.border = "1px solid red";
    email.style.color = "red";
  } else if (!email.checkValidity()) {
    event.preventDefault();
    errorMsg.textContent = "Please enter a valid email";
    email.style.border = "1px solid red";
    email.style.color = "red";
  } else {
    errorMsg.textContent = "";
  }
});

//date
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear() + ".";
const date1 = document.querySelector(".date1");
date1.textContent = new Date().getFullYear() + ".";
