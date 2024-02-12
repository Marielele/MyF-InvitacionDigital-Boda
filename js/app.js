document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

// Variables
const counter = document.querySelector(".day-counter").children;
const counterDays = counter[0].firstChild;
const counterHours = counter[1].firstChild;
const counterMinutes = counter[2].firstChild;
const counterSeconds = counter[3].firstChild;
const bigDay = document.querySelector(".big-day");
const btnModal = document.querySelectorAll(".btn-wbg");
const album = document.querySelector(".album__photos--location");
const galery = document.querySelector(".album__photos--galery");
const body = document.querySelector("body");
const sections = document.querySelectorAll(".sctn");
let weddingDay = new Date("2024-12-14T16:30:00");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timer;

startApp();

// Functions
function loadEventListeners() {
  let codeHTML = "";
  btnModal[0].addEventListener("click", () => {
    codeHTML = `
    <p class='no-margin close-btn'> x </p>
    <h3 class="text-center">Mapa</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14900.956457773029!2d-86.8332951190797!3d20.983050039349827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e815a5e4ba6c7%3A0x4022494765152a0a!2sLobby%20Moon%20Palace%20%40Nizuc!5e0!3m2!1ses-419!2smx!4v1707263298633!5m2!1ses-419!2smx" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    createModal(codeHTML);
  });

  btnModal[3].addEventListener("click", () => {
    codeHTML = `
    <p class='no-margin close-btn'> x </p>
    <h3 class="text-center">Datos bancarios</h3>
    `;
    createModal(codeHTML);
  });

  album.addEventListener("click", (e) => {
    let imgSelected = e.target.id;
    showIMG(imgSelected);
  });

  galery.addEventListener("click", (e) => {
    // if (e.target.alt === "Los novios") {
    //   let imgSelected = e.target.id;
    //   showIMG(imgSelected);
    // }
    let imgSelected = e.target.id;
    showIMG(imgSelected);
  });

  window.addEventListener("scroll", (e) => {
    const section = document.querySelector("#first");
    const footer = document.querySelector("footer");
    const floatBtn = body.lastElementChild.classList.contains("floating-btn");
    if (
      section.getBoundingClientRect().top < 0 &&
      footer.getBoundingClientRect().top > 1000
    ) {
      btnUP();
    } else {
      if (floatBtn) {
        body.lastElementChild.remove();
      }
    }
  });
}

function startApp() {
  loadEventListeners();
  watching();
}

function btnUP() {
  const floatBtn = body.lastElementChild.classList.contains("floating-btn");
  if (!floatBtn) {
    const btn = document.createElement("button");
    btn.classList.add("floating-btn");
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-tail" width="48" height="48" viewBox="0 0 24 24" stroke-width="1" stroke="#fafaf7" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 18l0 -15" />
    <path d="M15 6l-3 -3l-3 3" />
    <path d="M15 21l-3 -3l-3 3" />
  </svg>
    `;
    body.appendChild(btn);
    btn.classList.add("fade-in");

    btn.addEventListener("click", (e) => {
      window.scrollTo(0, 0);
    });
  }
}

function showIMG(idIMG) {
  switch (idIMG) {
    case "img1":
      codeHTML = `
      <p class='no-margin close-btn-photos'> x </p>
      <img src="img/1.jpg" alt="Beach" class="w-100" id="img1" />
      `;
      createModal(codeHTML, true);
      break;
    case "img2":
      codeHTML = `
      <p class='no-margin close-btn-photos'> x </p>
      <img src="img/2.jpg" alt="Beach" class="w-100" id="img2" />
      `;
      createModal(codeHTML, true);
      break;
    case "img3":
      codeHTML = `
      <p class='no-margin close-btn-photos'> x </p>
      <img src="img/3.jpg" alt="Beach" class="w-100" id="img3" />
      `;
      createModal(codeHTML, true);
      break;
    case "img4":
      codeHTML = `
        <p class='no-margin close-btn-photos'> x </p>
        <img src="img/4.jpeg" alt="Los novios" class="w-100" id="img4" />
        `;
      createModal(codeHTML, true);
      break;
    case "img5":
      codeHTML = `
          <p class='no-margin close-btn-photos'> x </p>
          <img src="img/5.jpg" alt="Los novios" class="w-100" id="img5" />
          `;
      createModal(codeHTML, true);
      break;
    case "img6":
      codeHTML = `
            <p class='no-margin close-btn-photos'> x </p>
            <img src="img/6.jpg" alt="Los novios" class="w-100" id="img6" />
            `;
      createModal(codeHTML, true);
      break;
    case "img7":
      codeHTML = `
              <p class='no-margin close-btn-photos'> x </p>
              <img src="img/7.jpg" alt="Los novios" class="w-100" id="img7" />
              `;
      createModal(codeHTML, true);
      break;
    case "location-photo-1":
      codeHTML = `
      <p class='no-margin close-btn color-light'> x </p>
      <img src="img/1.jpg" alt="Beach" class="w-100" id="img1" />
      `;
      createModal(codeHTML, true);
      break;
    case "galery-1":
      codeHTML = `
        <p class='no-margin close-btn-photos'> x </p>
        <img src="img/4.jpeg" alt="Beach" class="w-100" id="img4" />
        `;
      createModal(codeHTML, true);
      break;
    case "galery-3":
      codeHTML = `
        <p class='no-margin close-btn-photos'> x </p>
        <img src="img/3.jpg" alt="Beach" class="w-100" id="img3" />
        `;
      createModal(codeHTML, true);
      break;
    default:
      console.log(idIMG);
      break;
  }
}

function createModal(code, isIMG = false) {
  const overlay = document.createElement("div");
  const window = document.createElement("div");
  overlay.classList.add("overlay");
  isIMG ? window.classList.add("modal-IMG") : window.classList.add("modal");
  window.innerHTML = code;
  overlay.appendChild(window);
  body.appendChild(overlay);
  body.classList.add("lock-body");
  window.classList.add("fade-in");
  // const closebtn = window.firstElementChild;
  // closebtn.addEventListener("click", () => {
  //   overlay.remove();
  //   body.classList.remove("lock-body");
  // });
  body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("overlay") ||
      e.target.classList.contains("close-btn") ||
      e.target.classList.contains("close-btn-photos")
    ) {
      overlay.remove();
      body.classList.remove("lock-body");
    }
  });
}

function triggerAnimation(entries) {
  entries.forEach((entry) => {
    const q = entry.target.querySelector(".animate");
    if (q === null) {
      console.log(" ");
    } else {
      q.classList.toggle("unset", entry.isIntersecting);
    }
  });
}

function watching() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(triggerAnimation, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function updateDays() {
  let today = new Date();
  let distance = weddingDay - today;
  if (distance < 0) {
    clearInterval(timer);
    bigDay.lastElementChild.firstElementChild.textContent =
      "El evento ha terminado";
    return;
  }
  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  counterDays.textContent = days;
  counterHours.textContent = hours;
  counterMinutes.textContent = minutes;
  counterSeconds.textContent = seconds;
}

timer = setInterval(updateDays, 1000);
