document.getElementsByTagName("h1")[0].style.fontSize = "5vw";
const startDate = new Date("2020-12-13T00:08:23");
function updateTimer(){
  const now = new Date ();
  const timeDifference = now - startDate;
  const days= Math.floor(timeDifference / (1000*60*60*24));
  const hours = Math.floor((timeDifference / (1000*60*60))%24);
  const minutes = Math.floor ((timeDifference / (1000*60))%60);
  const seconds = Math.floor ((timeDifference / 1000) % 60)
  document.getElementById("timer").innerText=
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);
updateTimer();