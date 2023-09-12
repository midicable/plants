let cities = [
  {
    'Name': 'Canandaigua, NY',
    'Phone': '+1 585 393 0001',
    'Office address': '151 Charlotte Street'
  }, 
  {
    'Name': 'Oneida, NY',
    'Phone': '+1 585 393 0002',
    'Office address': '152 Charlotte Street'
  }, 
  {
    'Name': 'Hagaman, NY',
    'Phone': '+1 585 393 0003',
    'Office address': '153 Charlotte Street'
  }, 
  {
    'Name': 'Albany, NY',
    'Phone': '+1 585 393 0004',
    'Office address': '154 Charlotte Street'
  }
]

let select = document.querySelector('.select');
let selectedCityName = document.querySelector('.selected-city-name');
let citiesList = document.querySelector('.cities-list');
let options = citiesList.querySelectorAll('.option');
let arrowButton = document.querySelector('.arrow-button');

select.addEventListener('click', () => { 
  citiesList.classList.toggle('cities-list-active');
  arrowButton.classList.toggle('arrow-button-active');
  select.classList.remove('select-selected');
  selectedCityName.innerHTML = 'City';
});


let cityInfo = document.querySelector('.city-info');
let womanGardener = document.querySelector('#woman-gardener');
let cityArrayIndex; 
let selectedCity;

options.forEach(option => {
  option.addEventListener('click', () => {
    womanGardener.classList.add('woman-gardener-diactivated');
    citiesList.classList.toggle('cities-list-active');
    arrowButton.classList.toggle('arrow-button-active');
    select.classList.add('select-selected');
    document.querySelector('.contacts-select').classList.add('contacts-select-active');
    selectedCityName.innerHTML = option.innerHTML;

    // находим выбранный пользователем город в массиве, и на основе свойств объекта Город
    // добавляем полученную информацию в карточку city-info
    cityArrayIndex = Number(option.id.slice(-1));
    selectedCity = cities[cityArrayIndex];
    document.getElementById('city-name').innerHTML = selectedCity['Name'];
    document.getElementById('city-phone').innerHTML = selectedCity['Phone'];
    document.getElementById('city-address').innerHTML = selectedCity['Office address'];

    // отображаем city-info на страницу
    cityInfo.classList.add('city-info-active');
  });
});


let callButton = document.querySelector('.call-us-btn');
let phoneNumber;

callButton.addEventListener('click', () => {
  phoneNumber = document.getElementById('city-phone').innerHTML.replace(/\s+/g, '');
  callButton.setAttribute('href', 'tel:' +  phoneNumber);
});