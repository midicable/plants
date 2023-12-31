// ------------------------------------------------Plants#1 self-check---------------------------------------------------
// console.log("1. Верстка валидная (+10)\n" +
//             "------------------------------------------------------------------------------------------\n" +
//             "2. Вертска семантическая (+20)\n" +
//             "--2.1. Есть <header>, <main>, <footer> (+3)\n" + 
//             "--2.2. 5 элементов <section> (+3)\n" +
//             "--2.3. Только один <h1> (+3)\n" +
//             "--2.4. 5 элементов <h2> (+3)\n" + 
//             "--2.5. Один элемент <nav> в хедере (+3)\n" + 
//             "--2.6. Два списка <ul> (панель навигации и ссылки на соцсети) (+3)\n" + 
//             "--2.7. Пять кнопок <button> (+2)\n" + 
//             "------------------------------------------------------------------------------------------\n" + 
//             "3. Верстка соответсвует макету (+48)\n" +
//             "--3.1. Есть <header> (+6)\n" + 
//             "--3.2. Есть welcome (+7)\n" +
//             "--3.3. Есть about (+7)\n" +
//             "--3.4. Есть service (+7)\n" + 
//             "--3.5. Есть prices (+7)\n" + 
//             "--3.6. Есть contacts (+7)\n" + 
//             "--3.7. Есть <footer> (+7)\n" + 
//             "------------------------------------------------------------------------------------------\n" +
//             "4. Требования к CSS (+10)\n" +
//             "--4.1. Для построения многих блоков я использовал FlexBox (+2)\n" + 
//             "--4.2. При уменьшении масштаба страницы вёрстка размещается по центру, а не сдвигается в сторону (+2)\n" +
//             "--4.3. Фоновый цвет не тянется на всю ширину страницы :( (+0)\n" +
//             "--4.4. Иконки в формате .svg (+2)\n" + 
//             "--4.5. Изображения в формате .jpg или .png (+2)\n" + 
//             "--4.6. Есть favicon (+2)\n" + 
//             "------------------------------------------------------------------------------------------\n" +
//             "5. Интерактивность, реализуемая через CSS (+20)\n" +
//             "--5.1. Плавная прокрутка по якорям (в некоторых браузерах scroll-behavior может не работать, но у меня в хроме прокрутка плавная) (+5)\n" + 
//             "--5.2. Ссылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (+5)\n" +
//             "--5.3. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта (+5)\n" +
//             "--5.4. Обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы (+5)\n" +
//             "------------------------------------------------------------------------------------------\n" +
//             "Итого: 108");


// ------------------------------------------------Plants#2 self-check---------------------------------------------------
console.log("1. Соответствует макету (ширина 768px) (+24)\n" +
            "-1.1. Блок <header> (+2)\n" + 
            "-1.2. Секция welcome (+3)\n" +
            "-1.3. Секция about (+4)\n" +
            "-1.4. Секция service (+4)\n" + 
            "-1.5. Секция prices (+4)\n" + 
            "-1.6. Секция contacts (+4)\n" + 
            "-1.7. Блок <footer> (+3)\n" + 
            "------------------------------------------------------------------------------------------\n" +
            "2. Соответствует макету (ширина 380px) (+24)\n" +
            "-2.1. Блок <header> (+2)\n" + 
            "-2.2. Секция welcome (+3)\n" +
            "-2.3. Секция about (+4)\n" +
            "-2.4. Секция service (+4)\n" + 
            "-2.5. Секция prices (+4)\n" + 
            "-2.6. Секция contacts (+4)\n" + 
            "-2.7. Блок <footer> (+3)\n" + 
            "------------------------------------------------------------------------------------------\n" + 
            "3. Ни на одном из разрешений до 320px включительно (нижняя граница) не появляется горизонтальная полоса прокрутки. " + 
            "Весь контент страницы при этом сохраняется: не обрезается и не удаляется (+15)\n" +
            "-3.1. Нет полосы прокрутки при ширине страницы от 1440рх до 380px (+7)\n" + 
            "-3.2. Нет полосы прокрутки при ширине страницы от 380px до 320рх (+8)\n" +
            "------------------------------------------------------------------------------------------\n" +
            "4. На ширине экрана 380рх и меньше реализовано адаптивное меню (+20)" + 
            "(Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n" +
            "-4.1. При ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка (+2)\n" + 
            "-4.2. При нажатии на бургер-иконку плавно появляется адаптивное меню (+4)\n" +
            "-4.3. Адаптивное меню соответствует цветовой схеме макета (+4)\n" +
            "-4.4. При нажатии на крестик адаптивное меню плавно скрывается уезжая за экран (+4)\n" + 
            "-4.5. Ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (+4)\n" + 
            "-4.6. При клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна (+2)" + 
            "(не скрывается, если кликнуть вне данного окна)\n" + 
            "------------------------------------------------------------------------------------------\n" +
            "Итого: 83");