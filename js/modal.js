// js/modal.js
$(function () {
  const $form = $('#authForm');
  const $email = $('#email, #emailAuth'); // 兼容不同页面 ID
  const $password = $('#password, #passwordAuth');
  
  $form.on('submit', function (e) {
    e.preventDefault();
    const email = $email.val().trim();
    const password = $password.val().trim();

    // 基础校验
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // 简单邮箱格式验证
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // 模拟登录成功
    alert(`Welcome back, ${email}!`);
    $('#authModal').modal('hide');
    $form[0].reset();
  });

  // 当 modal 打开时自动聚焦第一个输入框
  $('#authModal').on('shown.bs.modal', function () {
    $(this).find('input:first').trigger('focus');
  });
});
