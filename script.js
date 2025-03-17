// تأثير الضوء المتحرك
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('glow');
    glow.style.left = `${e.clientX - 100}px`;
    glow.style.top = `${e.clientY - 100}px`;
});

// تفعيل التفاعل عند النقر
let unlockStep = 0;
document.addEventListener('click', () => {
    unlockStep++;
    if(unlockStep === 3) {
        // كشف الأرشيف السري
        document.getElementById('secret-archive').classList.add('revealed');
    }
});

// تأثيرات الصوت
const soundLibrary = {
    click: new Audio('sounds/glitch-click.wav'),
    hover: new Audio('sounds/electric-hum.wav')
};

document.querySelectorAll('.hover-effect').forEach(item => {
    item.addEventListener('mouseenter', () => {
        soundLibrary.hover.currentTime = 0;
        soundLibrary.hover.play();
    });
});