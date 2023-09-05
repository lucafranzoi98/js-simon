/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */

const countdownEl = document.getElementById("countdown");
const testEl = document.getElementById("test");

const clock = setInterval(function(){
   const date = new Date("09/06/2023 09:30:00");
   const dateSeconds = parseInt(date.getTime() / 1000);
   const currentTime = new Date();
   const currentTimeSeconds = parseInt(currentTime.getTime() / 1000);
   let seconds = dateSeconds - currentTimeSeconds;
   let minutes = 0;
   let hours = 0;


   if (seconds != 0) {
      while(seconds > 59) {
         minutes++;
         seconds = seconds - 60;
      }
      while (minutes > 59) {
         hours++;
         minutes = minutes - 60;
      }

      if (hours < 10) {
         hours = "0" + hours;
      }

      if (minutes < 10) {
         minutes = "0" + minutes;
      }

      if (seconds < 10) {
         seconds = "0" + seconds;
      }

      countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
   } else{
      clearInterval(clock);
      countdownEl.innerHTML = "È arrivato il momento della correzione!";
   }
}, 1000);


