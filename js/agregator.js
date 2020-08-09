import tabs from'../js/modules/tabs.js';
import timer from'../js/modules/timer.js';
import menu from'../js/modules/menu.js';
import slider from'../js/modules/slider.js';
import calc from'../js/modules/calc.js';
import forms from'../js/modules/forms.js';
import modals from'../js/modules/modals.js';
import {modalOpen} from './modules/modals.js';

window.addEventListener('DOMContentLoaded',() =>{
    const modalTimeOut = setTimeout(()=> {modalOpen('.modal',modalTimeOut);},10000 );
        tabs();
        timer();
        menu();
        slider({
            container:'.offer__slider',
            slidesWrapper:'.offer__slider-wrapper',
            slidesField:'.offer__slider-inner',
            oneSlide:'.offer__slide',
            forward:'.offer__slider-next',
            backward:'.offer__slider-prev',
            current:'current',
            totalNum:'total'});
        calc();
        forms('form', modalTimeOut);
        modals('[data-modal]', '.modal', modalTimeOut);
});