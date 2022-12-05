 const hourHand = document.querySelector(".hour-hand");
 const minHand = document.querySelector(".min-hand");
 const secondHand = document.querySelector(".second-hand");
 
 
 
 function setDate(){
   const now = new Date();
   const seconds = now.getSeconds();

   //Formula to grab the degrees of each second, the (+ 90) adjusts for transform:rotate(90deg) under ".hand" in css
   const secondsDegrees = ((seconds / 60) * 360) + 90; 
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   const minutes = now.getMinutes();
   const minutesDegrees = ((minutes / 60) * 360) + 90;
   minHand.style.transform = `rotate(${minutesDegrees}deg)`;

   const hours = now.getHours();
   const hourDegrees = ((hours / 12) * 360) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }

//1000 miliseconds = 1 second
 setInterval(setDate, 1000);