document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu_btn"); // 햄버거 버튼
  const btnGnb = document.querySelector("#btn_gnb"); // 메뉴

  // 햄버거 버튼 클릭 시 메뉴 토글
  menuBtn.addEventListener("click", function (event) {
    this.classList.toggle("click");
    btnGnb.classList.toggle("click");
    event.stopPropagation(); // 클릭 이벤트 전파 방지
  });

  // 메뉴가 아닌 다른 곳 클릭 시 메뉴 닫기
  document.addEventListener("click", function (event) {
    if (!btnGnb.contains(event.target) && !menuBtn.contains(event.target)) {
      btnGnb.classList.remove("click");
      menuBtn.classList.remove("click");
    }
  });

  // 화면 크기 변경 시 메뉴 닫기 (1024px 이상일 때)
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      btnGnb.classList.remove("click");
      menuBtn.classList.remove("click");
    }
  });
});
