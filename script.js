let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let loginForm = document.querySelector('.login-form');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

//  تعريف أزرار الفيديو
let videoBtn = document.querySelectorAll('.video-btn');

// تفعيل المنيو بار
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// التحكم في شريط البحث
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
    loginForm.classList.remove('active');
};

// وظائف نافذة التسجيل
function showform() {
    loginForm.classList.add('active');
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-times');
}

function hideform() {
    loginForm.classList.remove('active');
}

// إغلاق كل شيء عند التمرير
window.onscroll = () => {
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
};

// --- الجزء الخاص بسلايدر الفيديو ---
videoBtn.forEach(btn => {
    btn.onclick = () => {
        // 1. نقل الكلاس 'blue' للزر الذي تم الضغط عليه
        document.querySelector('.controls .blue').classList.remove('blue');
        btn.classList.add('blue');
        
        // 2. تغيير مصدر الفيديو بناءً على data-src الموجود في الـ HTML
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    };
});