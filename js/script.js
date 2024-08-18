
let $ = document;
let time = $.querySelector('.time');

setInterval(() => {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + ", "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    time.textContent = datetime;
}, 1000);



let portfolios = $.querySelectorAll('.portfolios');
let portfolio = $.querySelector('.portfolio');

let previewportfolio = $.querySelector('.preview_portfolio');
let preview = $.querySelector('.preview');


portfolios.forEach(e => {
    e.addEventListener('click', () => {
        previewportfolio.style.display = 'flex'
        preview.setAttribute('src', e.getAttribute('src'))
    })
});


let close_window = $.querySelector('.close_window');

close_window.addEventListener('click', () => {
    previewportfolio.style.display = "none";
})