// تعريف اسم المستخدم وكلمة المرور المسموح بها كثوابت
const allowedUsername = 'user1';
const allowedPassword = 'pass1234';

document.addEventListener('DOMContentLoaded', function () {
    var loginButtons = document.querySelectorAll('button[type="submit"][name="btnAuthenticate"]');
    loginButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            
            var form = button.closest('form');
            var usernameInput = form.querySelector('input[name="j_username"]');
            var passwordInput = form.querySelector('input[name="j_password"]');
            var errorMessage = form.querySelector('.error-message');
            
            // التحقق من صحة اسم المستخدم وكلمة المرور
            if (usernameInput.value.trim() !== allowedUsername || passwordInput.value.trim() !== allowedPassword) {
                errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
                errorMessage.style.display = 'block';
                return; // توقف التنفيذ
            }
            
            // إذا كانت بيانات الاعتماد صحيحة، قم بتسجيل الدخول
            window.location.href = "/html/login.html"; // تغيير هذا إلى رابط الصفحة المطلوبة لتسجيل الدخول
        });
    });
});
