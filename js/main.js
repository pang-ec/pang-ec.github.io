// 뜬구름 잡는 이야기 — 최소한의 인터랙션만.
// 헤더에 스크롤 시 그림자를 살짝 더해 "떠 있는" 느낌을 유지.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 8px 24px -18px rgba(34,48,63,0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
