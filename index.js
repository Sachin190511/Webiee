function sendMail() {
  var params = {
      name: document.getElementById("exampleInputName").value,
      email: document.getElementById("exampleInputEmail2").value,
      message: document.getElementById("exampleInputMessage").value,
  };

  const serviceID = "service_ibo1ka9"; // Replace with your EmailJS service ID
  const templateID = "template_pw5qjwx"; // Replace with your EmailJS template ID

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("exampleInputName").value = "";
          document.getElementById("exampleInputEmail2").value = "";
          document.getElementById("exampleInputMessage").value = "";
          alert("Your message has been sent successfully!");
      })
      .catch(err => console.log("Error:", err));
}

// Modal JS

const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close-btn");
const subscribeBtn = document.querySelector("#news-subscribe");
const form = document.querySelector("#modal-form");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  elements.forEach(el => observer.observe(el));
});


// Function to handle form submission (you can customize this)
function subscribe(e) {
  e.preventDefault();
  const emailInput = document.querySelector("#modal-email").value;
  // You can add your logic to handle the form submission here
  // alert("Email subscribed: "+emailInput);
  closeModal();
}

form.addEventListener("submit", subscribe)
// closeBtn.addEventListener("click", closeModal);

// Open the modal as soon as the page loads
window.onload = openModal();


// carousel JS

const slideDots = document.querySelectorAll(".imageDots span");
const slides = document.querySelectorAll(".mySlides");
let activeSlide = 0;

const destinationTitles = [
  "Charuu Maa",
  "Adieyy Charuu",
  "Babyy maa",
  "Edooo maa",
];

const destinationSubtitles = ["My😘", "god💕", "Gifted💗", "Princess🧚‍♀️"];

slideDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    pullSlide(null, index);
  });
});

function pullSlide(relativeNum, absoluteNum) {
  if (typeof relativeNum === "number") {
    activeSlide = (activeSlide + relativeNum) % 4;
    if (activeSlide < 0) activeSlide = slides.length + activeSlide;
  } else if (typeof absoluteNum === "number") {
    activeSlide = absoluteNum;
  }
  const title = destinationTitles[activeSlide];
  const subtitle = destinationSubtitles[activeSlide];
  slides.forEach((slide) => {

    // Check if destination__details already exists, if not, create it
    let detailsContainer = slide.querySelector(".destination__details");
    if (!detailsContainer) {
      detailsContainer = document.createElement("div");
      detailsContainer.className = "destination__details";
      slide.appendChild(detailsContainer);
    }

    // Check if destination__title already exists, if not, create it
    let titleElement = detailsContainer.querySelector(".destination__title");
    if (!titleElement) {
      titleElement = document.createElement("p");
      titleElement.className = "destination__title";
      detailsContainer.appendChild(titleElement);
    }
    titleElement.textContent = title;

    // Check if destination__subtitle already exists, if not, create it
    let subtitleElement = detailsContainer.querySelector(".destination__subtitle");
    if (!subtitleElement) {
      subtitleElement = document.createElement("p");
      subtitleElement.className = "destination__subtitle";
      detailsContainer.appendChild(subtitleElement);
    }
    subtitleElement.textContent = subtitle;
  });

  slides[0].style.marginLeft = `${-activeSlide * 100}%`;

  slideDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  slideDots[activeSlide].classList.add("active");
}

// Initial details rendering
pullSlide(0);

document.getElementById('emailInput').addEventListener('focus', function() {
  document.getElementById('send').classList.add('focused');
});

document.getElementById('emailInput').addEventListener('blur', function() {
  document.getElementById('send').classList.remove('focused');
});