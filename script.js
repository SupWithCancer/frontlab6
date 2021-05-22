
const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.body;
body.appendChild(div);
const header = document.createElement('h1');
header.textContent = 'тут я пытаюсь сделать штуки';


div.insertAdjacentElement('beforebegin', header)

const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;


div.innerHTML = ul;

const img = document.createElement('img');

img.src = 'https://picsum.photos/240';
img.height = 350

img.width = 240;

img.classList.add('super');

img.alt = 'picture';

div.appendChild(img)

const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML)

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

pDiv.firstElementChild.remove();


const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>автомобіль ${brand.toUpperCase()} - ${year} року. Вік - ${curYear - year}.</p>
            <p>Колір: ${color}</p>
            <button type='button' class='btn'>Delete</button>
        </div>
    `;
}

const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsList = [
    {brand: 'тесла', year: 2015, color: 'червоний'},
    {brand: 'лексус', year: 2016, color: 'чорний'},
    {brand: 'хонда', year: 2012, color: 'чорнийук'},
    {brand: 'машинка', year: 2020, color: ''},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');


carsDiv.innerHTML = carsHTML;

div.insertAdjacentElement('beforebegin', carsDiv);

const buttons = document.querySelectorAll('.btn');


function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    // console.log(currentButton.parentElement)
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})