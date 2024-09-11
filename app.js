let hour = document.querySelector(".hourLine");
let min = document.querySelector(".minLine");
let second = document.querySelector(".secendsLine");

function hour1(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree =((seconds/60)*360)+90;
     second.style.transform=`rotate(${secondDegree}deg)`


    const mins =now.getMinutes()
    const minDegree = ((mins/60)*360)+90;
    min.style.transform=`rotate(${minDegree}deg)`

    const hourr =now.getHours()
    const hourdegree = ((hourr/12)*360)+90;
    hour.style.transform=`rotate(${hourdegree}deg)`
}
setInterval(() => {
    hour1();
}, 1000);