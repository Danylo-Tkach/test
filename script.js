const now = new Date();
var text = document.getElementById('DateText');

// День тижня (0 — неділя, 1 — понеділок, ..., 6 — субота)
const dayOfWeek = now.getDay();

// Години
const hours = now.getHours();

// Форматування дня тижня у назву (українською)
const daysUa = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
const dayName = daysUa[dayOfWeek];

if (dayOfWeek !== 6 && dayOfWeek !== 0) {
    if (hours >= 9 && hours < 13) {
        text.style.color = 'green';
        text.textContent = 'Відчинено';
    } else if (hours >= 13 && hours < 14) {
        text.style.color = 'gold';
        text.textContent = 'Обід';
    } else if (hours >= 14 && hours < 18) {
        text.style.color = 'green';
        text.textContent = 'Відчинено';
    } else {
        text.style.color = 'red';
        text.textContent = 'Зачинено';
    }
} else if (dayOfWeek === 0) {
    if (hours >= 9 && hours < 15) {
        text.style.color = 'green';
        text.textContent = 'Відчинено';
    } else {
        text.style.color = 'red';
        text.textContent = 'Зачинено';
    }
} else {
    text.style.color = 'red';
    text.textContent = 'Зачинено';
}