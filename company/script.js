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

/* ABOUT animation*/
const targets = document.querySelectorAll('.fade-in-left');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  targets.forEach((el, index) => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 150); // ←順番に出す
    }
  });
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