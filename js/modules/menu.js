function menu(){
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
            if(this.classes. length>0){
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
    
    /* НАЙТИ РЕШЕНИЕ! https://javascript.ru/forum/misc/72548-vyvod-kursa-valyut.html
    const currency = async (url)=>{
        let usd = await fetch(url,{
        method:'GET',
        }).Valute;
        //return await usd.json();
        return await usd;
    };
    console.log(currency('https://www.cbr-xml-daily.ru/daily_json.js'));
    
    const getMenu = async (url) => {
        let result = await fetch(url, {
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        });
        if(!result.ok){
            throw new Error(`${url} has status ${result.status}`);
        }
        return await result.json();
    };
    
    
    getMenu('http://localhost:3000/menu')
        .then(response => {
            response.forEach(obj =>{
                new shopItem('.menu .container',
                    obj.img,
                    obj.altimg,
                    obj.title,
                    obj.descr,
                    obj.price).render();
            });})
        .catch(()=>console.log('SHIT!'));
    */
    
    axios.get('http://localhost:4000/menu')
            .then(response => {
                response.data.forEach(obj =>{
                    new shopItem('.menu .container',
                        obj.img,
                        obj.altimg,
                        obj.title,
                        obj.descr,
                        obj.price).render();
                });});
    /*new shopItem('.menu .container',
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
    */
}

export default menu;