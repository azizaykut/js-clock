
let UserName = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if(UserName){
    myName.innerHTML = `${UserName} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
} 




/***************** KRONOMETRE ****************** */


window.onload = function(){
  var seconds = 00;
  var tens = 00;
  var OutputSeconds = document.getElementById("second");
  var OutputTens = document.getElementById("tens");
  var buttonStart = document.getElementById("btn-start");
  var buttonStop = document.getElementById("btn-stop");
  var buttonReset = document.getElementById("btn-reset");
  var Interval;

  buttonStart.addEventListener('click', () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
  });

  buttonStop.addEventListener('click', () => {
      clearInterval(Interval);
  });

  buttonReset.addEventListener('click', () => {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      OutputSeconds.innerHTML = seconds;
      OutputTens.innerHTML = tens;
  });

  function startTimer(){
      tens++;
      if(tens <= 9){
          OutputTens.innerHTML = "0" + tens;
      }

      if(tens > 9){
          OutputTens.innerHTML = tens;
      }

      if(tens > 99){
          seconds++;
          OutputSeconds.innerHTML = "0" + seconds;
          tens = 0;
          OutputTens.innerHTML = "0" + 0;
      }

      if(seconds > 9){
          OutputSeconds.innerHTML = seconds;
      }
  }
}

/***************** SAAT ****************** */

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();



/***************** ARKA PLAN RENK ****************** */


const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "#FF4858",
  "#1B7F79",
  "#025E73",
  "#76A60F",
  "#2E4159",
  "#4F4D8C",
  "#2963ab",
];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
  // rastgele bir renk

  //   const rastgeleSayi = Math.floor(Math.random() * colors.length);
  //   const secilenRenk = colors[rastgeleSayi];
  //   console.log(rastgeleSayi, secilenRenk);
  //   body.style.backgroundColor = secilenRenk;

  // sırayla arkaplan rengi seç

  if (sıra == 7) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}