/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */

const countdownEl = document.getElementById("countdown");

const clock = setInterval(function(){
   const date = new Date("09/06/2023 09:30:00");
   const dateMilliseconds = date.getTime();
   const currentTime = new Date();
   const currentTimeMilliseconds = currentTime.getTime();
   const finalTimeMilliseconds = dateMilliseconds - currentTimeMilliseconds;

   if (finalTimeMilliseconds != 0) {
      countdownEl.innerHTML = finalTimeMilliseconds;
   } else {
      clearInterval(clock);
      countdownEl.innerHTML = "È arrivato il momento della correzione!";
   }
}, 1);

