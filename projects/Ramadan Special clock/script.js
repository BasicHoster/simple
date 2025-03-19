
setInterval(function () {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    
    
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    
   
    const fajrTime = "05:00 AM";
    const dhuhrTime = "12:00 PM";
    const asrTime = "03:00 PM";
    const maghribTime = "06:30 PM";
    const ishaTime = "08:00 PM";
    
    
    document.getElementById('fajr-time').textContent = fajrTime;
    document.getElementById('dhuhr-time').textContent = dhuhrTime;
    document.getElementById('asr-time').textContent = asrTime;
    document.getElementById('maghrib-time').textContent = maghribTime;
    document.getElementById('isha-time').textContent = ishaTime;
}, 1000);
