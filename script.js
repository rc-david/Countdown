function updateCounter() {
    // Change these values as needed
    const eventDate = new Date('2023-06-01T12:00:00'); // Last event date and time
    const eventNumber = 'E123456';
    const parentCaseNumber = 'PC123456';
    const incNumber = 'INC123456';
    const incLink = 'https://example.com/inc123456';

    const now = new Date();
    const timeDiff = now - eventDate;
    
    const daysSinceLastEvent = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursSinceLastEvent = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const dayDigits = String(daysSinceLastEvent).padStart(7, '0').split('');
    const hourDigits = String(hoursSinceLastEvent).padStart(2, '0').split('');
    
    document.getElementById('day1').innerText = dayDigits[0];
    document.getElementById('day2').innerText = dayDigits[1];
    document.getElementById('day3').innerText = dayDigits[2];
    document.getElementById('day4').innerText = dayDigits[3];
    document.getElementById('day5').innerText = dayDigits[4];
    document.getElementById('day6').innerText = dayDigits[5];
    document.getElementById('day7').innerText = dayDigits[6];
    
    document.getElementById('hour1').innerText = hourDigits[0];
    document.getElementById('hour2').innerText = hourDigits[1];
    
    document.getElementById('eventDate').innerText = eventDate.toDateString();
    document.getElementById('eventNumber').innerText = eventNumber;
    document.getElementById('parentCaseNumber').innerText = parentCaseNumber;
    document.getElementById('incNumber').innerText = incNumber;
    document.getElementById('incLink').href = incLink;
}

updateCounter();
setInterval(updateCounter, 3600000); // Update every hour
