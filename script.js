const openApp = document.querySelector('.container__btn_active');
const back = document.querySelector('.back');

openApp.addEventListener('click', () => {
    let position = 0;
    let timer = setInterval(() => {
        if (position > 100) {
            clearInterval(timer);
            return;
        }
        document.querySelector('.container').style.transform = `translateY(${-position}dvh)`;
        document.querySelector('main').style.transform = `translateY(${-position}dvh)`;
        position++;
    }, 5)
})

back.addEventListener('click', () => {
    let position = -100;
    let timer = setInterval(() => {
        if (position > 0) {
            clearInterval(timer);
            return;
        }
        document.querySelector('.container').style.transform = `translateY(${position}dvh)`;
        document.querySelector('main').style.transform = `translateY(${position}dvh)`;
        position++;
    }, 5)
})

const categories = document.querySelector('.categories');
const subcategories = document.querySelector('.subcategories');

document.querySelector('.name').innerText = 'Categories'

