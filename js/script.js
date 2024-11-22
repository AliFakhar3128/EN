// انتخاب المان‌های ضروری از صفحه
let $ = document; // استفاده از document به صورت ساده
let time = $.querySelector('.time'); // انتخاب المان زمان با استفاده از کلاس 'time'

// هر ۱ ثانیه یکبار زمان جاری را به روز رسانی می‌کند
setInterval(() => {
    // دریافت تاریخ و زمان جاری
    var currentdate = new Date(); // ایجاد شیء جدید از Date برای دسترسی به تاریخ و زمان جاری
    var datetime = currentdate.getDate() + "/" // روز جاری
        + (currentdate.getMonth() + 1) + "/" // ماه جاری (ماه‌ها از صفر شروع می‌شوند)
        + currentdate.getFullYear() + ", " // سال جاری
        + currentdate.getHours() + ":" // ساعت جاری
        + currentdate.getMinutes() + ":" // دقیقه جاری
        + currentdate.getSeconds(); // ثانیه جاری

    // به روز رسانی محتوای متنی عنصر time با زمان جاری
    time.textContent = datetime;
}, 1000); // این کد هر ۱ ثانیه (۱۰۰۰ میلی‌ثانیه) اجرا می‌شود


// انتخاب المان‌های ضروری برای گالری پورتفولیو
let portfolios = document.querySelectorAll('.portfolios'); // انتخاب تمام تصاویر پورتفولیو با استفاده از کلاس 'portfolios'
let previewportfolio = document.querySelector('.preview_portfolio'); // انتخاب پنجره پیش‌نمایش پورتفولیو
let preview = document.querySelector('.preview'); // انتخاب تصویر پیش‌نمایش
let close_window = document.querySelector('.close_window'); // انتخاب دکمه بستن پنجره پیش‌نمایش

// اضافه کردن شنونده رویداد کلیک به تمام پورتفولیوها
portfolios.forEach((e) => {
    e.addEventListener('click', () => {
        previewportfolio.style.display = 'flex'; // نمایش پنجره پیش‌نمایش
        preview.setAttribute('src', e.getAttribute('src')); // تنظیم منبع تصویر پیش‌نمایش به همان منبع تصویر انتخاب شده

        // افزودن انیمیشن باز شدن تصویر پیش‌نمایش
        preview.style.animation = 'fadeInZoom 0.5s ease'; // انیمیشن باز شدن با استفاده از CSS
    });
});

// افزودن شنونده رویداد کلیک به دکمه بستن پنجره
close_window.addEventListener('click', () => {
    // اجرای انیمیشن بسته شدن تصویر پیش‌نمایش
    preview.style.animation = 'fadeOutZoom 0.5s ease'; // انیمیشن بسته شدن با استفاده از CSS

    // پس از اتمام انیمیشن (۰.۵ ثانیه)، پنجره پیش‌نمایش را مخفی کن
    setTimeout(() => {
        previewportfolio.style.display = 'none'; // مخفی کردن پنجره پس از مدت زمان انیمیشن
    }, 500); // مدت زمان انیمیشن بسته شدن (۰.۵ ثانیه)
});
