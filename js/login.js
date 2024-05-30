function checkForm() {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
    
    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("password");
    let email = emailField.value.trim(); // تجاهل الفراغات في بداية ونهاية النص
    let password = passwordField.value;

    // التحقق من الحقول الفارغة
    if (email === '' || password === '') {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Please fill out all for all !",     
  });
        return false;
    }

    // البريد الإلكتروني المسموح به
    const allowedEmail = 'test@1';
    // كلمة المرور المسموح بها
    const allowedPassword = 'password123';

    // التحقق من صحة البريد الإلكتروني
    if (email !== allowedEmail) {
        emailField.style.borderColor = "#B51213";
        emailField.style.background = "#EBDBDB";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid email ",     
  });
        return false;
    }

    // التحقق من صحة كلمة المرور
    if (password !== allowedPassword) {
        passwordField.style.borderColor = "#B51213";
        passwordField.style.background = "#EBDBDB";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid password ",     
  });
        return false;
    }

    // إذا تم التحقق من البريد الإلكتروني وكلمة المرور
    // يتم توجيه المستخدم إلى الصفحة التالية
  
    // إضافة تأخير قبل التحويل بمدة 3 ثوانٍ وعرض رسالة "time over"
    let timerInterval;
    Swal.fire({
        title: "Data is being verified....",
        html: "You will be taken within  <b></b> seconds to the next page.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            let timeLeft = 3;
            timer.textContent = timeLeft;
            timerInterval = setInterval(() => {
                timeLeft--;
                timer.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(() => {
        window.location.href = "/html/CODE.html"; // تحويل إلى الصفحة التالية بعد انتهاء التأخير
    });

    // تعطيل زر الرجوع أو التقدم في المتصفح
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
    };

    return true;
}


