import {thankYouModal} from '../modules/modals';
import {formSent} from '../services/services';

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
       formSent('http://localhost:4000/requests',json)
            .then(response => {
                console.log(data);
                console.log(response);
                thankYouModal(formSendStatusMsg.succsess,'.modal',modalTimeOut);
                formSendStatusMsgDiv.innerHTML = '';
            })
            .catch(() => {
                thankYouModal(formSendStatusMsg.error,'.modal',modalTimeOut);
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
export default forms;