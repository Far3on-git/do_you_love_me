// الحصول على الزر
const noButton = document.getElementById("noButton");

// متغير لتحديد ما إذا كان الزر يتحرك بالفعل
let isMoving = false;

// دالة لتحريك الزر
function moveButton() {
    if (isMoving) return; // إذا كان الزر يتحرك بالفعل، نوقف الدالة

    isMoving = true; // تحديد أن الزر بدأ في الحركة

    let x = 0;
    let y = 0;

    const intervalId = setInterval(() => {
        // تحريك عشوائي للزر
        x += Math.random() * 10 - 5;
        y += Math.random() * 10 - 5;

        noButton.style.transform = `translate(${x}px, ${y}px)`;

        // إيقاف الحركة بعد فترة زمنية معينة أو عند الوصول إلى شرط معين
        if (Math.abs(x) > 100 || Math.abs(y) > 100) {
            clearInterval(intervalId);
            isMoving = false; // إعادة تعيين الحالة بعد انتهاء الحركة
        }
    }, 100);
}

// معالجة حدث النقر (للأجهزة المكتبية)
noButton.addEventListener("click", function(event) {
    event.preventDefault(); // منع السلوك الافتراضي
    moveButton(); // تشغيل دالة الحركة
});

// معالجة حدث اللمس (للأجهزة المحمولة)
noButton.addEventListener("touchstart", function(event) {
    event.preventDefault(); // منع السلوك الافتراضي
    moveButton(); // تشغيل دالة الحركة
});
