window.addEventListener('DOMContentLoaded',() =>{
    let tabheaderItems = document.querySelector('.tabheader__items'),
        tabcontent = document.querySelectorAll('.tabcontent');
    

    function showTab(i){
        tabcontent.forEach((item) =>{
            item.classList.add('hide');
            item.classList.remove('show');
            //item.classList.add('fade');
        });
        //tabcontent[i].style.display = 'block';
        tabcontent[i].classList.add('show','fade');
        tabcontent[i].classList.remove('hide');
    }
    showTab(0);

    tabheaderItems.addEventListener('click', (event)=>{
        let target = event.target,
            tabheaderItem = document.querySelectorAll('.tabheader__item');
        if(target && target.tagName == 'DIV'){
            for(let i = 0; i < tabheaderItem.length; i++){
                if(target == tabheaderItem[i]){
                    showTab(i);
                    tabheaderItem.forEach(item =>{item.classList.remove('tabheader__item_active');});
                    tabheaderItem[i].classList.add('tabheader__item_active');
                    
                }
            }
        }
    });

    let sellOfferEnds = new Date('2020-06-20');
    
        function countOfferTime(){
            let days = document.getElementById('days'),
                hours = document.getElementById('hours'),
                minutes = document.getElementById('minutes'),
                seconds = document.getElementById('seconds'),
                now = new Date(),
                
                remainingTime = sellOfferEnds - now,
                remainingDays = Math.floor(remainingTime/(1000*60*60*24)),
                remainingHours = Math.floor((remainingTime/(1000*60*60)%24))-3,
                remainingMinutes = Math.floor((remainingTime/1000/60)%60),
                remainingSeconds = Math.floor((remainingTime/1000)%60);
                
                function getZero(num){
                    if(num<10){
                        return `0${num}`;
                    }
                        return num;
                }
                
                if(remainingTime < 0){
                    days.textContent = 0;
                    hours.textContent = 0;
                    minutes.textContent = 0;
                    seconds.textContent = 0;
                    clearTimeout(timerLoop);
                } else{
                    days.textContent = getZero(remainingDays);
                    hours.textContent = getZero(remainingHours);
                    minutes.textContent = getZero(remainingMinutes);
                    seconds.textContent = getZero(remainingSeconds);
                }
        }
let timerLoop = setInterval(countOfferTime, 1);
//Modal
let modalBtns = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]');
    
    modalBtns.forEach(item =>{
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            //modalWindow.classList.add('show');
            //modalWindow.classList.remove('hide');
            modalOpen();
        });
    });
    function modalOpen(){
        modalWindow.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }
    function modalCloseF(){
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        //modalWindow.classList.toggle('show');
        document.body.style.overflow = '';
        clearInterval(modalTimeOut);
    }

    modalClose.addEventListener('click',modalCloseF);

    modalWindow.addEventListener('click', event => {
        if(event.target === modalWindow){
            //modalWindow.classList.add('hide');
            //modalWindow.classList.remove('show');
            modalCloseF();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === "Escape" && modalWindow.classList.contains('show')){
            //modalWindow.classList.add('hide');
            //modalWindow.classList.remove('show');
            modalCloseF();
        }
    });
    
    let modalTimeOut = setTimeout(modalOpen,500000);

    function modalByPageBottom(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            modalOpen();
            window.removeEventListener('scroll',modalByPageBottom);
        }
    }

    window.addEventListener('scroll',modalByPageBottom);

//через классы добавляем товары
class shopItem{
    constructor (parent, imgSrc, imgAlt, itemTitle, itemDescr, price, ...classes){
        this.parent = parent;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.itemTitle = itemTitle;
        this.itemDescr = itemDescr;
        this.price = price;
        this.classes = classes;
        this.exchange = 71;
        this.convert2RUB();
        
    }
    convert2RUB(){
        this.price = +this.price * this.exchange;
    }
    render(){
        let item = document.createElement('div');
        if(this.classes.length>0){
            this.classes.forEach(className => item.classList.add(className));
        } else {
            item.classList.add('menu__item');
        }
        item.innerHTML = `
                    <img src="${this.imgSrc}" alt="${this.imgAlt}">
                    <h3 class="menu__item-subtitle">${this.itemTitle}</h3>
                    <div class="menu__item-descr">${this.itemDescr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
        `;

        document.querySelector(this.parent).append(item);
    }
}

new shopItem('.menu .container',
            'img/tabs/vegy.jpg',
            'vegy',
            'Меню “Фитнес”',
            'Меню “Фитнес” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            10
        ).render();
        
new shopItem('.menu .container',
            'img/tabs/elite.jpg',
            'elite',
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            30,
            'menu__item'
        ).render();

new shopItem('.menu .container',
            'img/tabs/post.jpg',
            'post',
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            50,
            'menu__item'
        ).render();





























});