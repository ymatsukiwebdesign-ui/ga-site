/* =================
  初期化（DOM読み込み後）
================= */
document.addEventListener("DOMContentLoaded", function () {

  /* =================
    要素取得
  ================= */

  const header = document.querySelector(".header");
  const fadeElements = document.querySelectorAll(".fade-up");
  const pageTop = document.querySelector(".page-top");
  const aboutSection = document.querySelector(".about-flex");
  const aboutLeft = document.querySelector(".about-left");
  const serviceHeading = document.querySelector(".service-heading-wrap");

  /* =================
    Swiper
  ================= */

  new Swiper(".service-slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });

  /* =================
    スクロール処理（統合）
  ================= */

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    /* header表示制御 */
    if (header) {
      if (currentScroll > lastScroll) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
    }
    lastScroll = currentScroll;

    /* fade-up */
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect().top;
      if (rect < windowHeight - 100) {
        el.classList.add("show");
      }
    });

    /* pageTop */
    if (pageTop) {
      if (currentScroll > 300) {
        pageTop.classList.add("show");
      } else {
        pageTop.classList.remove("show");
      }
    }

    /* ABOUT */
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect().top;
      if (rect < windowHeight - 100) {
        aboutSection.classList.add("active");
        if (aboutLeft) aboutLeft.classList.add("active");
      }
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

  /* =================
    service
  ================= */

const target = document.querySelector('.service');

if (target) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.service-heading-wrap').classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
      threshold: 0,
      rootMargin: '-150px 0px'
  });

  observer.observe(target);
}

/* =================
  quality
================= */

const qualityTargets = document.querySelectorAll(".quality-left");

if (qualityTargets.length) {
  const qualityObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  qualityTargets.forEach(target => {
    qualityObserver.observe(target);
  });
}


/* =================
  news
================= */

const newsTargets = document.querySelectorAll(".news-left");

if (newsTargets.length) {
  const newsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  newsTargets.forEach(target => {
    newsObserver.observe(target);
  });
}

const modal = document.getElementById("videoModal");
const iframe = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

function openModal() {
  if (!modal || !iframe) return;
  modal.style.display = "flex";
  iframe.src = "https://www.youtube.com/embed/p0lgeNhUAJs?autoplay=1&mute=1";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal || !iframe) return;
  modal.style.display = "none";
  iframe.src = "";
  document.body.style.overflow = "auto";
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

window.openModal = openModal;
});

/* =================
  loading
================= */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (!loading) return;

  setTimeout(() => {
    loading.classList.add("hide");
  }, 2200);
});