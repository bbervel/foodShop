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
export default modals;
export {modalOpen,modalCloseF,thankYouModal};