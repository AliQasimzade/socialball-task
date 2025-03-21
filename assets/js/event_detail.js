const timeDisplays = document.querySelectorAll('.time_display');
const tabs = document.querySelectorAll('.tab');
const tabBtns = document.querySelectorAll('.tab_btns button');

let initialTimeInSeconds = (12 * 3600) + (33 * 60) + 45;
let timeInSeconds = initialTimeInSeconds;

const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${padZero(hours)}h:${padZero(minutes)}m:${padZero(secondsRemaining)}s`;
}

const padZero = (num) => num < 10 ? '0' + num : num;

const timer = setInterval(() => {
    if (timeInSeconds <= 0) {
        timeInSeconds = initialTimeInSeconds;
    } else {
        timeDisplays.forEach(data => data.innerHTML = `<span>${formatTime(timeInSeconds)}</span>`)
        timeInSeconds--;
    }
}, 1000);

tabBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(button => button.classList.remove('active_tab_btn'));
        btn.classList.add('active_tab_btn');
        tabs.forEach(tab => tab.classList.remove('active_tab'));
        tabs[idx].classList.add('active_tab');
    });
});