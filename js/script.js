document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

function startApp() {
  const btnMap = document.querySelector("#hotel-map");
  const btnMap_2 = document.querySelector("#church-map");

  watching();
  createGalery(1, 3, "location");
  createGalery(4, 7, "galery");

  window.addEventListener("scroll", (e) => {
    const body = document.querySelector("body");
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

  btnMap.addEventListener("click", (e) => {
    openMap(0, "hotel");
  });

  btnMap_2.addEventListener("click", (e) => {
    openMap(1, "capilla");
  });

  timer = setInterval(updateDays, 1000);
}

// Functions
function watching() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(triggerAnimation, options);
  const sections = document.querySelectorAll(".sctn");
  sections.forEach((section) => {
    observer.observe(section);
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

function btnUP() {
  const body = document.querySelector("body");
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

function updateDays() {
  let weddingDay = new Date("2024-12-14T16:30:00");
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let timer;
  const bigDay = document.querySelector(".big-day");
  const counter = document.querySelector(".day-counter").children;
  const counterDays = counter[0].firstChild;
  const counterHours = counter[1].firstChild;
  const counterMinutes = counter[2].firstChild;
  const counterSeconds = counter[3].firstChild;
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

function createGalery(indexFirst, indexLast, type) {
  const galery = document.querySelector(`.album__photos--${type}`);
  for (let i = indexFirst; i <= indexLast; i++) {
    const div = document.createElement("DIV");
    const pic = document.createElement("PICTURE");
    const srcSet = document.createElement("SOURCE");
    const img = document.createElement("IMG");
    div.classList.add(`album__photo--${type}`);
    div.id = `${type}-photo-${i}`;
    pic.id = `${type}-${i}`;
    srcSet.srcset = `img/lowres/${i}.webp`;
    srcSet.type = "image/webp";
    img.id = i;
    img.classList.add("w-100");
    img.loading = "lazy";
    img.src = `img/${i}.jpg`;
    // if ternario
    type === "galery"
      ? (img.alt = "Los novios")
      : (img.alt = "Lugares de hotel");
    div.onclick = function () {
      window.open(`img/${i}.jpg`);
      // showImage(i);
    };
    pic.appendChild(srcSet);
    pic.appendChild(img);
    div.appendChild(pic);
    galery.appendChild(div);
  }
}

function showImage(index) {
  createNewModal(true);
  const img = document.createElement("IMG");
  const prev = document.createElement("DIV");
  const next = document.createElement("DIV");
  const imgModal = document.querySelector(".modal-IMG");
  img.src = `img/${index}.jpg`;
  img.classList.add("w-100");
  prev.id = "prev";
  prev.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-compact-left" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f9faff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 20l-3 -8l3 -8" />
    </svg> 
  `;
  next.id = "next";
  next.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-compact-right" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f9faff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11 4l3 8l-3 8" />
    </svg> 
  `;
  prev.onclick = function () {
    closeModal();
    index -= 1;
    if (index < 1) {
      index = 7;
    }
    showImage(index);
  };
  next.onclick = function () {
    closeModal();
    index += 1;
    if (index > 7) {
      index = 1;
    }
    showImage(index);
  };
  imgModal.appendChild(img);
  imgModal.appendChild(prev);
  imgModal.appendChild(next);
  // console.log(`img clicked ${index}`);
}

function createNewModal(img = false) {
  const body = document.querySelector("BODY");
  const overlay = document.createElement("DIV");
  const window = document.createElement("DIV");
  const btnClose = document.createElement("P");
  overlay.classList.add("overlay");
  img ? window.classList.add("modal-IMG") : window.classList.add("modal");
  window.classList.add("fade-in");
  img
    ? btnClose.classList.add("close-btn-photos")
    : btnClose.classList.add("close-btn");
  btnClose.classList.add("no-margin");
  btnClose.textContent = "x";
  body.classList.add("lock-body");
  window.appendChild(btnClose);
  overlay.appendChild(window);
  body.appendChild(overlay);

  // Close modal
  btnClose.onclick = closeModal;
  overlay.onclick = function (e) {
    if (e.target.classList.contains("overlay")) {
      closeModal();
    }
  };
}

function openMap(type, text) {
  createNewModal();
  const window = document.querySelector(".modal");
  const title = document.createElement("H3");
  const content = document.createElement("DIV");
  title.classList.add("text-center");
  title.textContent = `Mapa de ${text}`;
  let url;
  type == 0 ? url = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14900.956457773029!2d-86.8332951190797!3d20.983050039349827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e815a5e4ba6c7%3A0x4022494765152a0a!2sLobby%20Moon%20Palace%20%40Nizuc!5e0!3m2!1ses-419!2smx!4v1707263298633!5m2!1ses-419!2smx" width="100%" height="400" style="border:0;" referrerpolicy="no-referrer-when-downgrade">
    </iframe>` : url = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d232.83207670910235!2d-86.8296788!3d20.9800777!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzQ4LjUiTiA4NsKwNDknNDcuMSJX!5e0!3m2!1ses-419!2sco!4v1726167151904!5m2!1ses-419!2sco" width="100%" height="400" style="border:0;" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  content.innerHTML = url;
  window.appendChild(title);
  window.appendChild(content);
}

function closeModal() {
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");
  overlay.remove();
  body.classList.remove("lock-body");
}
