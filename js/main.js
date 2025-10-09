// js/main.js
// 解决锚点跳转被 fixed navbar 遮住的问题
(function() {
  const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
  if (navbarHeight) {
    document.documentElement.style.scrollPaddingTop = navbarHeight + 'px';
  }
})();

// 简易：点击 .js-scroll 进行平滑滚动（给 a 链接加 .js-scroll 即可）
document.addEventListener('click', function(e){
  const a = e.target.closest('a.js-scroll[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior:'smooth', block:'start' });
  }
});
