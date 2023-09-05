/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */

const countdownEl = document.getElementById("countdown");
const testEl = document.getElementById("test");

const clock = setInterval(function(){
   const date = new Date("09/06/2023 09:30:00");
   const dateSeconds = parseInt(date.getTime() / 1000);
   const currentTime = new Date();
   const currentTimeSeconds = parseInt(currentTime.getTime() / 1000);
   const finalTimeSeconds = dateSeconds - currentTimeSeconds;


   if (finalTimeSeconds != 0) {
      countdownEl.innerHTML = finalTimeSeconds;   
   } else{
      clearInterval(clock);
      countdownEl.innerHTML = "È arrivato il momento della correzione!";
   }
}, 1000);


