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
export default timer;