/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/agregator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/agregator.js":
/*!*************************!*\
  !*** ./js/agregator.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/timer.js */ "./js/modules/timer.js");
/* harmony import */ var _js_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/modules/menu.js */ "./js/modules/menu.js");
/* harmony import */ var _js_modules_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modules/slider.js */ "./js/modules/slider.js");
/* harmony import */ var _js_modules_calc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/modules/calc.js */ "./js/modules/calc.js");
/* harmony import */ var _js_modules_forms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/modules/forms.js */ "./js/modules/forms.js");
/* harmony import */ var _js_modules_modals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/modules/modals.js */ "./js/modules/modals.js");









window.addEventListener('DOMContentLoaded',() =>{
    const modalTimeOut = setTimeout(()=> {Object(_js_modules_modals_js__WEBPACK_IMPORTED_MODULE_6__["modalOpen"])('.modal',modalTimeOut);},10000 );
        Object(_js_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        Object(_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        Object(_js_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        Object(_js_modules_slider_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
            container:'.offer__slider',
            slidesWrapper:'.offer__slider-wrapper',
            slidesField:'.offer__slider-inner',
            oneSlide:'.offer__slide',
            forward:'.offer__slider-next',
            backward:'.offer__slider-prev',
            current:'current',
            totalNum:'total'});
        Object(_js_modules_calc_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        Object(_js_modules_forms_js__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimeOut);
        Object(_js_modules_modals_js__WEBPACK_IMPORTED_MODULE_6__["default"])('[data-modal]', '.modal', modalTimeOut);
});

/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc(){
let activeBlock = document.querySelector('.calculating__choose_big'),//блок с активностью
    activeBtn = activeBlock.querySelectorAll('.calculating__choose-item'),//кнопки внутри блока
    result = document.querySelector('.calculating__result span');

let gender = 'female', height, weight, age, ratio = 1.375, calorees;
gender = 'female';
if(localStorage.getItem('gender')){
    gender = localStorage.getItem('gender');
}else{
    localStorage.setItem('gender', 'female');
}
if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
}else{
    localStorage.setItem('ratio', 1.375);
}
allComplete();
/*
формула
для мужчин: BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)
для женщин: BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)
*/
function initLocalData(parentSelector,activeClass){
    let elements = document.querySelectorAll(parentSelector);
        elements.forEach(item=>{
            item.classList.remove(activeClass);
            if(localStorage.getItem('gender')=== item.getAttribute('id')){
                item.classList.add(activeClass);
            }
            if(localStorage.getItem('ratio')=== item.getAttribute('data-ratio')){
                item.classList.add(activeClass);
            }
        });
        
        
}
initLocalData('#gender div', 'calculating__choose-item_active');
initLocalData('.calculating__choose_big div', 'calculating__choose-item_active');
//обработка кнопок выбора
function getSelectedData(parentSelector, activeClass){
    let elements = document.querySelectorAll(parentSelector);
    elements.forEach(item=>{
        item.addEventListener('click',(event)=>{
            if(event.target.getAttribute('data-ratio')){
                ratio = +event.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', ratio);
            } else{
                gender = event.target.getAttribute('id');
                localStorage.setItem('gender', gender);
            }
            elements.forEach(item=>{
               item.classList.remove(activeClass); 
            });
            event.target.classList.add(activeClass);
            allComplete();
        });
        
    });
}
getSelectedData('#gender div', 'calculating__choose-item_active');
getSelectedData('.calculating__choose_big div', 'calculating__choose-item_active');
//обработка инпутов
function getInputedData(inputSelector){
    let inputItem = document.querySelector(inputSelector);
    inputItem.addEventListener('input',()=>{
        if(inputItem.value.match(/\D/g)){
            inputItem.style.background = 'pink';
        } else {
            inputItem.style.background = '';
        }
        switch(inputItem.getAttribute('id')){
            case 'height': height = +inputItem.value;
            break;
            case 'weight': weight = +inputItem.value;
            break;
            case 'age': age = +inputItem.value;
            break;
        }
        allComplete();
    });
}
getInputedData('#height');
getInputedData('#weight');
getInputedData('#age');


function allComplete(){
    if(gender && height && weight && age && ratio){
        if(gender == 'male'){
            calorees = (88.36+(13.4 * weight)+(4.8 * height)-(5.7 * age))*ratio;
        } else{
            calorees = (447.6 + (9.2 * weight) + (3.1 * height)-(4.3 * age))*ratio;
        }
        result.textContent = Math.round(calorees);
    }else{
        result.textContent = '----';
    }
}
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modals */ "./js/modules/modals.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector,modalTimeOut){
    // обработка форм FormData
    let forms = document.querySelectorAll(formSelector);
    forms.forEach((item)=>{
        bindFormSent(item);
    });


let formSendStatusMsg = {
    loading: '<center><img src="img/form/spinner.svg"></center>',
    succsess: 'Супер! Мы позвоним в ближайшее время!',
    error: 'Что-то пошло не так. Попробуйте позже'
};
/*
function bindFormSent(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        let data = new FormData(form);
        request.send(data);
        let formSendStatusMsgDiv = document.createElement('div');
        formSendStatusMsgDiv.classList.add('status');
        formSendStatusMsgDiv.textContent = formSendStatusMsg.loading;
        form.append(formSendStatusMsgDiv);
        
        request.addEventListener('load',()=>{
            if(request.status === 200){
                console.log(request.response);
                formSendStatusMsgDiv.textContent = formSendStatusMsg.succsess;
            } else {
                formSendStatusMsgDiv.textContent = formSendStatusMsg.error;
            }
        });
    });
}


// обработка форм JSON

function bindFormSent(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        let data = new FormData(form);
        let newData = {};
        data.forEach((item,key)=>{
            newData[key]=item;
        });
        let dataJson = JSON.stringify(newData);
        request.setRequestHeader('Content-type','application/json','charset=utf-8');
        request.send(dataJson);
        let formSendStatusMsgDiv = document.createElement('div');
        formSendStatusMsgDiv.classList.add('status');
        formSendStatusMsgDiv.innerHTML = formSendStatusMsg.loading;
        form.append(formSendStatusMsgDiv);
        request.addEventListener('load',(event)=>{
            if(request.status === 200){
                form.reset();
                console.log(request.response);
                thankYouModal(formSendStatusMsg.succsess);
                formSendStatusMsgDiv.innerHTML = '';
            } else {
                thankYouModal(formSendStatusMsg.error);
            }
        });
    });
}
*/
// отправка данных fetch();

function bindFormSent(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let data = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(data.entries()));
        /*
        let newData = {};
        data.forEach((item,key)=>{
            newData[key]=item;
        });
        
        fetch('server.php',{
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type':'application/json;charset=utf-8',
            }
        })  
        */
       Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["formSent"])('http://localhost:4000/requests',json)
            .then(response => {
                console.log(data);
                console.log(response);
                Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["thankYouModal"])(formSendStatusMsg.succsess,'.modal',modalTimeOut);
                formSendStatusMsgDiv.innerHTML = '';
            })
            .catch(() => {
                Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["thankYouModal"])(formSendStatusMsg.error,'.modal',modalTimeOut);
            })
            .finally(()=> {form.reset();
            });
        
        let formSendStatusMsgDiv = document.createElement('div');
        formSendStatusMsgDiv.classList.add('status');
        formSendStatusMsgDiv.innerHTML = formSendStatusMsg.loading;
        form.append(formSendStatusMsgDiv);
        /*request.addEventListener('load',(event)=>{
            if(request.status === 200){
                
                

                
            } else {
                
            }
        });*/
    });
}

}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./js/modules/modals.js":
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
/*! exports provided: default, modalOpen, modalCloseF, thankYouModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCloseF", function() { return modalCloseF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thankYouModal", function() { return thankYouModal; });
function modalOpen(modalSelector,modalTimeOut){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    document.body.style.overflow = 'hidden';
    if(modalTimeOut){
        clearInterval(modalTimeOut);
    }
}
function modalCloseF(modalSelector,modalTimeOut){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
    if(modalTimeOut){
        clearInterval(modalTimeOut);
    }
}
function thankYouModal(msg,modalSelector,modalTimeOut){
    let prevModalDialog = document.querySelector('.modal__content');
    prevModalDialog.classList.add('hide');
    modalOpen(modalSelector);
    let statusDiv = document.createElement('div');
    statusDiv.classList.add('modal__content');
    document.querySelector('.modal__dialog').append(statusDiv);
    statusDiv.innerHTML = `
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${msg}</div>
    `;
    prevModalDialog.classList.add('hide');
    setTimeout(()=>{
        statusDiv.remove();
        prevModalDialog.classList.remove('hide');
        modalCloseF(modalSelector,modalTimeOut);
    }, 2000);
}

function modals(btnsSelector,modalSelector,modalTimeOut){
let modalBtns = document.querySelectorAll(btnsSelector),
    modalWindow = document.querySelector(modalSelector);
    
    modalBtns.forEach(item =>{
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            modalOpen(modalSelector);
        });
    });

    //modalClose.addEventListener('click',modalCloseF);

    modalWindow.addEventListener('click', event => {
        if(event.target === modalWindow || event.target.getAttribute('data-close') ==''){//getAttribute добавлено что бы соытие работало даже на динамически созданном элементе
            //modalWindow.classList.add('hide');
            //modalWindow.classList.remove('show');
            modalCloseF(modalSelector,modalTimeOut);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === "Escape" && modalWindow.classList.contains('show')){
            //modalWindow.classList.add('hide');
            //modalWindow.classList.remove('show');
            modalCloseF(modalSelector,modalTimeOut);
        }
    });
    


    function modalByPageBottom(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            modalOpen(modalSelector);
            window.removeEventListener('scroll',modalByPageBottom);
        }
    }

    window.addEventListener('scroll',modalByPageBottom);

}
/* harmony default export */ __webpack_exports__["default"] = (modals);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, slidesWrapper, slidesField, oneSlide,forward,backward,current,totalNum}){
const 
    slider = document.querySelector(container),
    wrapper  = document.querySelector(slidesWrapper),
    inner  = document.querySelector(slidesField),
    slides = document.querySelectorAll(oneSlide),
    nextBtn = document.querySelector(forward),
    prevBtn  = document.querySelector(backward),
    currentSlide = document.getElementById(current),
    totalSlides = document.getElementById(totalNum);
slider.style.position = 'relative';
let indicators = document.createElement('ol');
indicators.classList.add('carousel-indicators');
slider.append(indicators);
let dots = [];
for(let i = 0;i<slides.length;i++){
    let dot = document.createElement('li');
    dot.setAttribute('slide_number', i);
    dot.classList.add('dot');
    indicators.append(dot);
    dots.push(dot);
}
let index = 0;
if(index==0){
    dots[0].style.opacity = 1;
}


if(slides.length > 9){
    totalSlides.innerHTML = slides.length;
}else{
    totalSlides.innerHTML = `0${slides.length}`;
}
let width = parseInt(window.getComputedStyle(wrapper).width);
inner.style.cssText = `width: ${slides.length * width}%`;
inner.style.display = 'flex';//,  transition:0.5 ALL`;
inner.style.transition = '0.5s ALL';
wrapper.style.overflow = 'hidden';
slides.forEach(item =>{
    item.style.cssText = `width: ${width}px`;
});
let offset = 0;
currentSlide.innerHTML = `0${index+1}`;

nextBtn.addEventListener('click', function(){
        offset += width;
        if(offset > (width * (slides.length-1))){
            offset = 0;
            inner.style.transform = `translateX(${-offset}px`;   
        }
        inner.style.transform = `translateX(${-offset}px`;
        if(index == slides.length-1){
            index = 0;
        } else{
            index++;
        }
        if(index < 9){
            currentSlide.innerHTML = `0${index+1}`; 
        } else{
            currentSlide.innerHTML = `${index+1}`;
        }
        dots.forEach(dot=>{
            dot.style.opacity = 0.5;
            dots[index].style.opacity = 1;
        });
});
prevBtn.addEventListener('click', function(){
    offset -= width;
    if(offset < 0){
        offset = width * (slides.length-1);
        inner.style.transform = `translateX(${-offset}px`;   
    } else {
        inner.style.transform = `translateX(${-offset}px`;   
    }
    if(index == 0){
        index = slides.length-1;
    } else{
        index--;
    }
    if(index < 9){
        currentSlide.innerHTML = `0${index+1}`; 
    } else{
        currentSlide.innerHTML = `${index+1}`;
    }
    dots.forEach(dot=>{
        dot.style.opacity = 0.5;
        dots[index].style.opacity = 1;
    });
});

dots.forEach(dot=>{
    dot.addEventListener('click', function(event){
        let slideNumber = dot.getAttribute('slide_number');
        index = +slideNumber;
        if(slideNumber==0){
           offset = 0; 
           inner.style.transform = `translateX(${-offset}px`;
        } else{
            offset = width * slideNumber;
            inner.style.transform = `translateX(${-offset}px`;
        }
        dots.forEach(dot=>{
            dot.style.opacity = 0.5;
            dots[index].style.opacity = 1;
        });
        if(index < 9){
            currentSlide.innerHTML = `0${index+1}`; 
        } else{
            currentSlide.innerHTML = `${index+1}`;
        }
    });
});
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(){
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
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(){
const sellOfferEnds = new Date('2020-08-20');
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
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: formSent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSent", function() { return formSent; });
const formSent = async (url,data) => {
    let result = await fetch(url, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:data
    });
    return await result.json();
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map