

const updateCurrentDay = ()  =>{
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    const options = { weekday: 'long'};
    const formattedTime = now.toLocaleString('en-US', options);
    currentDayElement.textContent = formattedTime;
  }
  setInterval(updateCurrentDay, 1000); // Update every second
  updateCurrentDay(); // Update immediately

  const updateCurrentTime = () => {
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    const utcMilliseconds = now.getTime();
    currentTimeElement.textContent = utcMilliseconds.toString() ;
}

setInterval(updateCurrentTime, 1); // Update every millisecond
updateCurrentTime(); // Update immediately
