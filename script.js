// Моб меню
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-menu a').forEach(link => { // Закрытие меню при клике
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Кнопка "Наверх"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// обр связь
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('В реальном проекте здесь будет подключение к бэкенду.');
    contactForm.reset();
});

// Плавная прокрутка для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => { // Наблюдаем за секциями
    observer.observe(section);
});

const avatar = document.getElementById('avatar'); // Загрузка аватара
avatar.onerror = function() {
    this.style.display = 'none';
    document.querySelector('.image-fallback').style.display = 'flex';
};