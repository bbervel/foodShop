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
export default calc;