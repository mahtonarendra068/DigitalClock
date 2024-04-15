const time = document.getElementById('time')
const timef = document.getElementById('timeFormate')
const day = document.getElementById('Day')

document.addEventListener('DOMContentLoaded' , () =>{

    setInterval(showTime, 1000 );
})

const showTime = () =>{

    let date = new Date;
    let hr = date.getHours();
    let min= date.getMinutes();
    let sec = date.getSeconds();
    hr = hr <10?`0${hr}`:hr;
    

  

    if(hr>= 12){
        timef.innerHTML =`PM`
    }else{
          timef.innerHTML =`AM`;
    }

    time.innerHTML =`${hr}:${min}:${sec}`
}
