// sliderContainer

const portfolioSliderTrack = document.querySelector(".portfolioSliderTrack");

const portfolioSliderImages = document.querySelectorAll(".portfolioSlideImage");

let portfolioCurrentIndex = 0;

function portfolioUpdateSlider() {
  portfolioSliderTrack.style.transform = `translateX(-${
    portfolioCurrentIndex * 100
  }%)`;
}

function portfolioNextSlide() {
  portfolioCurrentIndex++;

  if (portfolioCurrentIndex >= portfolioSliderImages.length) {
    portfolioCurrentIndex = 0;
  }

  portfolioUpdateSlider();
}

function portfolioPrevSlide() {
  portfolioCurrentIndex--;

  if (portfolioCurrentIndex < 0) {
    portfolioCurrentIndex = portfolioSliderImages.length - 1;
  }

  portfolioUpdateSlider();
}

// ----------------------
const nav = document.querySelector("#navbar nav");
const span = document.getElementById("navIndicator");
const links = nav.querySelectorAll("a");

let activeLink = links[0];

function moveIndicator(link) {
  span.style.width = link.offsetWidth + "px";
  span.style.left = link.offsetLeft + "px";
}

// Start me Home par
moveIndicator(activeLink);

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    moveIndicator(link);
  });

  link.addEventListener("mouseleave", () => {
    moveIndicator(activeLink);
  });

  link.addEventListener("click", () => {
    activeLink = link;
  });
});

// -----

emailjs.init("_Og4MX-dgHkvvZI1w");

const form = document.getElementById("contactForm");

const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn2.innerHTML = "Sending...";

  emailjs
    .send("service_11ifo1v", "template_sdichif", {
      from_name: name.value,

      from_email: email.value,

      message: message.value,
    })
    .then(() => {
      btn2.innerHTML = "Send Message";

      form.reset();

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
});
