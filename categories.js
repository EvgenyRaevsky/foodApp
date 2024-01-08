const categoriesList = {
    0: {
        image: './img/Vegetables.png',
        type: 'Vegetables',
        quantity: '32',
    },
    1: {
        image: './img/Fruits.png',
        type: 'Fruits',
        quantity: '27',
    },
    2: {
        image: './img/Bread.png',
        type: 'Bread',
        quantity: '14',
    },
    3: {
        image: './img/Sweets.png',
        type: 'Sweets',
        quantity: '43',
    },
    4: {
        image: './img/Pasta.png',
        type: 'Pasta',
        quantity: '9',
    },
    5: {
        image: './img/Coffee.png',
        type: 'Coffee',
        quantity: '10',
    },
};

let cards = [];

const createCard = () => {
    for (let i = 0; i < Object.keys(categoriesList).length; i++) {
        const card = document.createElement('article');
        card.className = 'card';

        const img = new Image;
        img.src = categoriesList[i].image;

        const h2 = document.createElement('h2');
        h2.innerText = categoriesList[i].type;

        const p = document.createElement('p');
        p.innerText = `(${categoriesList[i].quantity})`;

        card.append(img, h2, p);
        categories.append(card);

        cards.push(h2.innerText.toLowerCase());
    }
    cards = [...new Set(cards)];
}

const notFound = document.createElement('div');
notFound.className = 'notFound';
notFound.innerText = 'Nothing was found for your query'
notFound.style.display = 'none';
categories.append(notFound);

createCard();
let cardsFilter = [];
const search = document.querySelector('.search');
search.addEventListener('input', () => {
    cardsFilter = cards.filter(el => {
        return el.slice(0, search.value.length) === search.value.toLowerCase();
    });
    for (let i = 0; i < Object.keys(categoriesList).length; i++) {
        if (cardsFilter.length) {
            for (let j = 0; j < cardsFilter.length; j++) {
                if (document.querySelectorAll('.card')[i].childNodes[1].innerText.toLowerCase() === cardsFilter[j]) {
                    document.querySelectorAll('.card')[i].style.display = 'block';
                    notFound.style.display = 'none';
                    break;
                } else {
                    document.querySelectorAll('.card')[i].style.display = 'none';
                }
            }
        } else {
            document.querySelectorAll('.card')[i].style.display = 'none';
            notFound.style.display = 'block';
        }
    }
})
