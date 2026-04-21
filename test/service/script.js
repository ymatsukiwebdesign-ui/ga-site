/*
header
*/
let lastScroll = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScroll = currentScroll;
});

/*
fade animation
*/
const fadeElements = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (rect < windowHeight - 100) {
      element.classList.add("show");
    }
  });
});

/*
equipment accordion
*/
const equipmentToggles = document.querySelectorAll(".equipment-toggle");
const equipmentSubtoggles = document.querySelectorAll(".equipment-subtoggle");

equipmentToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.parentElement;
    const icon = toggle.querySelector(".equipment-icon");

    parent.classList.toggle("active");

    icon.textContent = parent.classList.contains("active") ? "−" : "+";

    // 親閉じたら子も閉じる
    if (!parent.classList.contains("active")) {
      const subitems = parent.querySelectorAll(".equipment-subitem");
      subitems.forEach((sub) => {
        sub.classList.remove("active");
        const subIcon = sub.querySelector(".equipment-icon");
        if (subIcon) subIcon.textContent = "+";
      });
    }
  });
});

equipmentSubtoggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.parentElement;
    const icon = toggle.querySelector(".equipment-icon");

    parent.classList.toggle("active");

    icon.textContent = parent.classList.contains("active") ? "−" : "+";
  });
});

/* =================
    ハンバーガー
  ================= */

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-nav");

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  /* メニューバー閉じる */
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  nav.addEventListener("click", (e) => {
    if (e.target === nav) {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    }
  });






/* pageTop */
const pageTop = document.querySelector(".page-top");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){
pageTop.classList.add("show");
}else{
pageTop.classList.remove("show");
}

});