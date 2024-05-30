document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otpForm = document.querySelector('.otp-Form');
    const resendBtn = document.querySelector('.resendBtn');

    const allowedEmail = "example@example.com"; // بريد الإلكتروني المسموح به

    otpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        otpInputs.forEach(input => {
            input.classList.remove('error');
        });

        let otp = '';
        let isValid = true;
        otpInputs.forEach(input => {
            const value = input.value.trim();
            if (!/^\d$/.test(value)) {
                input.classList.add('error');
                isValid = false;
            }
            otp += value;
        });

        if (otp.length !== 4 || !isValid) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please enter the code !", 
            });
            return;
        }

        if (otp === '1234' || otp === '2024') {
            setTimeout(function() {
                Swal.fire({
                    icon: "success",
                    title: "Done",
                    text: "The code is correct, you will be taken to the next page"
                });
            }, 1000); // تأخير لمدة 1 ثانية
            setTimeout(function() {
                window.location.href = "/html/home.html";
            }, 4000); // تأخير لمدة 4 ثوانٍ بعد عرض الرسالة
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid code. Please enter a valid code!"
            });
            return;
        }
    });

    resendBtn.addEventListener('click', async function(event) {
        event.preventDefault();
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to resend the code?",
            text: "The code will be sent to your ministerial email address registered with SEHA. The code usually takes up to five minutes. If you do not receive it within an hour, contact the technical director at your hospital or via SEHA email (support@seha.sa) or contact number (920002005) Note that working hours: Sunday through Thursday 8 am - 11 pm.",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
        });
        if (isConfirmed) {
            Swal.fire("The code has been sent", "", "success");
        } 
        else {
            Swal.fire("The code has been cancelled", "", "error");
        }
    });
});




