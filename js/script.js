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

 





































});