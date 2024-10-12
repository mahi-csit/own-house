let totalPoints = 0;
let events = JSON.parse(localStorage.getItem('events')) || [];

function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name}: ${event.points} points`;
        eventList.appendChild(li);
    });
}

function addEvent() {
    const eventNameInput = document.getElementById('event-name-input');
    const eventPointsInput = document.getElementById('event-points-input');
    const eventName = eventNameInput.value.trim();
    const eventPoints = parseInt(eventPointsInput.value);

    if (eventName !== "" && !isNaN(eventPoints)) {
        const event = { name: eventName, points: eventPoints };
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events)); // Save to localStorage
        displayEvents();

        totalPoints += eventPoints;
        document.getElementById('total-points').textContent = totalPoints;

        eventNameInput.value = "";
        eventPointsInput.value = "";
    }
}

document.addEventListener('DOMContentLoaded', displayEvents);
