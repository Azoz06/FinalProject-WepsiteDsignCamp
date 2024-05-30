document.addEventListener('DOMContentLoaded', function () {
    var loginButtons = document.querySelectorAll('button[type="submit"][name="btnAuthenticate"]');
    loginButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            
            var form = button.closest('form');
            var input = form.querySelector('input[name="NAT_ID"]');
            var errorMessage = form.querySelector('.c-alert--danger');
            var errorSpan = form.querySelector('.error-message');
            
            // تحقق من أن الحقل غير فارغ عند الضغط على زر تسجيل الدخول أو الضغط على Enter
            if (input.value.trim() === "") {
                input.style.border = '1px solid red';
                errorSpan.textContent = 'الرجاء إدخال رقم بطاقة الأحوال';
                errorMessage.style.display = 'block';
                return; // توقف التنفيذ
            } 
            
            // تحقق من أن رقم الهوية يحتوي على عشرة خانات على الأقل
            if (input.value.length < 10) {
                input.style.border = '1px solid red';
                errorSpan.textContent = 'تأكد من أنها عشر خانات';
                errorMessage.style.display = 'block';
                return; // توقف التنفيذ
            } 
            
            // قم بإنشاء متغير لتتبع ما إذا كان الرقم الذي تم إدخاله صالحًا
            var isValidID = false;
            
            // تحقق مما إذا كان رقم الهوية المدخل هو أحد الأرقام المسموح بها
            var allowedIDs = ['1234567892'];
            allowedIDs.forEach(function(allowedID) {
                if (input.value === allowedID) {
                    isValidID = true;
                }
            });
  
            // إذا كان رقم الهوية المدخل لا يتطابق مع الأرقام المسموح بها، فعرض رسالة الخطأ المناسبة
            if (!isValidID) {
                input.style.border = '1px solid red';
                errorSpan.textContent = 'رقم الهوية الذي تم إدخاله غير موجود';
                errorMessage.style.display = 'block';
                return; // توقف التنفيذ
            }
  
            window.location.href = "/iam/html/code-ar.html"; // تغيير هذا إلى رابط الصفحة المطلوبة لتسجيل الدخول
        });
    });
});
