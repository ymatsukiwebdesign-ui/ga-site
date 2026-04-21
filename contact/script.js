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
確認画面
*/
function confirmForm() {
  const name = document.querySelector('[name="contact_name"]').value;
  const company = document.querySelector('[name="company"]').value;
  const email = document.querySelector('[name="email"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const message = document.querySelector('[name="message"]').value;

  let confirmText = "以下の内容で送信しますか？\n\n";
  confirmText += "ご担当者名: " + name + "\n";
  confirmText += "会社名: " + company + "\n";
  confirmText += "メール: " + email + "\n";
  confirmText += "電話: " + phone + "\n";
  confirmText += "内容: " + message + "\n";

  return confirm(confirmText);
}

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