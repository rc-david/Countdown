function updateCounter(eventDate, eventNumber, parentCaseNumber, incNumber, incLink) {
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

function updateEventDetails() {
    const dateInput = document.getElementById('date').value;
    const eventNumber = document.getElementById('eventNumberInput').value;
    const parentCaseNumber = document.getElementById('parentCaseNumberInput').value;
    const incNumber = document.getElementById('incNumberInput').value;
    const incLink = document.getElementById('incLinkInput').value;

    const eventDate = new Date(dateInput);

    if (!isNaN(eventDate)) {
        localStorage.setItem('eventDate', eventDate.toISOString());
        localStorage.setItem('eventNumber', eventNumber);
        localStorage.setItem('parentCaseNumber', parentCaseNumber);
        localStorage.setItem('incNumber', incNumber);
        localStorage.setItem('incLink', incLink);

        updateCounter(eventDate, eventNumber, parentCaseNumber, incNumber, incLink);
    } else {
        alert('Please enter a valid date.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const storedEventDate = localStorage.getItem('eventDate');
    const storedEventNumber = localStorage.getItem('eventNumber') || '';
    const storedParentCaseNumber = localStorage.getItem('parentCaseNumber') || '';
    const storedIncNumber = localStorage.getItem('incNumber') || '';
    const storedIncLink = localStorage.getItem('incLink') || '#';

    if (storedEventDate) {
        const eventDate = new Date(storedEventDate);
        updateCounter(eventDate, storedEventNumber, storedParentCaseNumber, storedIncNumber, storedIncLink);
    }

    document.getElementById('eventNumberInput').value = storedEventNumber;
    document.getElementById('parentCaseNumberInput').value = storedParentCaseNumber;
    document.getElementById('incNumberInput').value = storedIncNumber;
    document.getElementById('incLinkInput').value = storedIncLink;
});

updateCounter(new Date(localStorage.getItem('eventDate') || '2023-06-01T12:00:00'), localStorage.getItem('eventNumber') || 'E123456', localStorage.getItem('parentCaseNumber') || 'PC123456', localStorage.getItem('incNumber') || 'INC123456', localStorage.getItem('incLink') || 'https://example.com/inc123456');
