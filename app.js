let hour = document.querySelector(".hourLine");
let min = document.querySelector(".minLine");
let second = document.querySelector(".secendsLine");

function hour1(){
    console.log("ROhit")
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree =((seconds/60)*360)+90;
    // console.log(secondDegree)
     second.style.transform=`rotate(${secondDegree}deg)`


    const mins =now.getMinutes()
    // console.log(mins)
    const minDegree = ((mins/60)*360)+90;
    min.style.transform=`rotate(${minDegree}deg)`

    const hourr =now.getHours()
    console.log(hourr)
    const hourdegree = ((hourr/12)*360)+90;
    console.log(hourdegree)
    hour.style.transform=`rotate(${hourdegree}deg)`
}
setInterval(() => {
    hour1();
}, 1000);