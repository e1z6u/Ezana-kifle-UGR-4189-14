const headings = document.querySelectorAll('h2');
document.querySelectorAll('section').forEach((sec) => {
    sec.addEventListener('mouseover', function () {
        sec.style.backgroundColor = 'palegreen';
        headings.forEach((h) => {
            h.classList.add('rotate');
        });
    });
    sec.addEventListener('mouseout', function () {
        sec.style.backgroundColor = 'white';
    });
});
const mainIntro = document.getElementById('mainTitle');
const header = document.querySelector('header');
const randomColors = ['pink', 'lightgreen', 'lightcyan', 'lightskyblue', 'azure'];
mainIntro.addEventListener('click', function () {
    let color = randomColors[(Math.random() + Math.random() + 2).toFixed(0)];
    header.style.backgroundColor = `${color}`;
});

document.addEventListener('scroll', function () {
    document.querySelector('.scroll-progress').style.width =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 + '%';
});
