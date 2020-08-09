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
export default slider;